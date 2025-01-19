import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import typeScriptLogo from "./assets/typescript.svg";
import eslintLogo from "./assets/eslint.svg";
import prettierLogo from "./assets/prettier.svg";
import tailWindLogo from "./assets/tailwind.svg";
import "./App.css";

function App() {
    return (
        <>
            <div className="flex items-center justify-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo vite" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
                <a href="https://www.typescriptlang.org" target="_blank">
                    <img
                        src={typeScriptLogo}
                        className="logo typescript"
                        alt="TypeScript logo"
                    />
                </a>
                <a href="https://eslint.org" target="_blank">
                    <img
                        src={eslintLogo}
                        className="logo eslint"
                        alt="ESLint logo"
                    />
                </a>
                <a href="https://prettier.io" target="_blank">
                    <img
                        src={prettierLogo}
                        className="logo prettier"
                        alt="Prettier logo"
                    />
                </a>
                <a href="https://tailwindcss.com" target="_blank">
                    <img
                        src={tailWindLogo}
                        className="logo tailwind"
                        alt="TailwindCSS logo"
                    />
                </a>
            </div>
        </>
    );
}

export default App;
