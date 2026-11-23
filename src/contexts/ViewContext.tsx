// ViewContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

interface ViewContextType {
  showAbout: boolean;
  toggleView: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [showAbout, setShowAbout] = useState(false);
  const toggleView = () => setShowAbout((prev) => !prev);

  return (
    <ViewContext.Provider value={{ showAbout, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView(): ViewContextType {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
