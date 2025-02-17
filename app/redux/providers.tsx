"use client"; // Quan trọng: Chỉ định đây là một Client Component

import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
