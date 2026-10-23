import { useCallback } from "react";
import { useSSE } from "../hooks/useSSE";
import { useNotifications } from "../context/NotificationContext";

import NavBar from "./NavBar.jsx";

export default function AppShell({ children }) {
  const { dispatch } = useNotifications();

  const handleMessage = useCallback(
    (data) => dispatch({ type: "ADD_NOTIFICATION", payload: data }),
    [dispatch]
  );

  useSSE("/api/notifications/stream", handleMessage);

  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
