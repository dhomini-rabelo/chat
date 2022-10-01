import { AuthProvider } from "../code/contexts/Auth";
import { RouterController } from "./router";

export function App() {
  return (
    <AuthProvider>
      <RouterController />
    </AuthProvider>
  )
}