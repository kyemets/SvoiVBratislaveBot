"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "favorites_v1";

function readFromStorage(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function writeToStorage(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Read from localStorage only on client
  useEffect(() => {
    setFavorites(readFromStorage());
  }, []);

  const toggle = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      writeToStorage(next);
      return next;
    });
  }, []);
  

  const isFavorite = useCallback(
    (id: string) => favorites.has(id),
    [favorites]
  );

  return { favorites, toggle, isFavorite };
}
