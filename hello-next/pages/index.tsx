import { useState } from "react";
import styles from "./index.module.scss";
import jwt from "jsonwebtoken";
import Link from "next/link";

export default function Home() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("You are not logged in !!!");

    async function submitForm(e) {
        e.preventDefault();
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        }).then((t) => t.json());

        const token = res.token;
        if (token) {
            const json = (await jwt.decode(token)) as { [key: string]: string };
            console.log(json);
            setMessage(
                `Welcome ${json.username} and you are ${
                    json.admin ? "an admin!" : "not an admin!"
                }`
            );
        }
    }

    return (
        <div>
            <div>
                <Link href="/dashboard">
                    <a>link to dashboard</a>
                </Link>
            </div>
            <h1>{message}</h1>
            <form>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input type="submit" value="Login" onClick={submitForm} />
            </form>
        </div>
    );
}
