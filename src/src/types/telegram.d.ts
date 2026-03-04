interface TelegramWebAppUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  disableClosingConfirmation: () => void;
  openTelegramLink: (url: string) => void;
  initDataUnsafe: {
    user?: TelegramWebAppUser;
  };
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}
