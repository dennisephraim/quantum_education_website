import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '@/context/ThemeContext';

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
        <DarkModeSwitch
            style={{ marginBottom: '2rem', margin: "auto" }}
            checked={theme === "dark"}
            onChange={toggleTheme}
            size={20}
        />
    </div>
  )
}