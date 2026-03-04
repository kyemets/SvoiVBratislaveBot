"use client";

import { useState, useEffect, useCallback } from "react";

export interface Comment {
  id: string;
  text: string;
  createdAt: string;
}

function storageKey(itemId: string) {
  return `comments_v1:${itemId}`;
}

function readComments(itemId: string): Comment[] {
  try {
    const raw = localStorage.getItem(storageKey(itemId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeComments(itemId: string, comments: Comment[]) {
  localStorage.setItem(storageKey(itemId), JSON.stringify(comments));
}

export function useComments(itemId: string) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setComments(readComments(itemId));
  }, [itemId]);

  const add = useCallback(
    (text: string) => {
      const comment: Comment = {
        id: Date.now().toString(),
        text: text.trim(),
        createdAt: new Date().toISOString(),
      };
      setComments((prev) => {
        const next = [...prev, comment];
        writeComments(itemId, next);
        return next;
      });
    },
    [itemId],
  );

  const remove = useCallback(
    (commentId: string) => {
      setComments((prev) => {
        const next = prev.filter((c) => c.id !== commentId);
        writeComments(itemId, next);
        return next;
      });
    },
    [itemId],
  );

  return { comments, add, remove };
}
