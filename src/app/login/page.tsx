"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if already logged in
  useEffect(() => {
    const auth = localStorage.getItem("enzy_auth");
    if (auth === "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username === "Enzy" && password === "Enzy") {
      localStorage.setItem("enzy_auth", "true");
      router.push("/admin");
      router.refresh();
    } else {
      setError("Felaktigt användarnamn eller lösenord.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
        
        {/* Header */}
        <div className="bg-brand-dark px-10 py-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Image src="/logo.png" alt="Enzymatica" width={40} height={40} className="opacity-80" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Admin Login</h1>
            <p className="text-brand-light/60 mt-2 font-medium">Logga in för att hantera innehåll</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-10 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-2xl text-sm font-bold flex items-center gap-3 animate-shake">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Användarnamn</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-transparent focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all text-lg font-bold"
              placeholder="Enzy"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Lösenord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-transparent focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all text-lg font-bold"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-teal hover:bg-brand-dark text-white py-5 rounded-2xl text-xl font-black shadow-xl shadow-brand-teal/20 transform active:scale-95 transition-all mt-4"
          >
            Logga in
          </button>
        </form>

        <div className="px-10 pb-8 text-center">
          <p className="text-sm text-gray-400 font-medium">
            Endast för behörig personal.
          </p>
        </div>
      </div>
    </div>
  );
}
