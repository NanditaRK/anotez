export default function AboutComponent() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white px-6 dark:bg-black">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          About AnoteZ
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          AnoteZ is a simple and lightweight note-taking app with AI
          capabilities to help you write, organize, and manage your notes.
        </p>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 text-left dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-black dark:text-white">
            AI Writing Assistant
          </h2>

          <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
            Use the Settings button in the bottom-right corner to add your API
            key and enable the AI writing assistant.
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-6 text-left dark:border-amber-900 dark:bg-amber-950/30">
          <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-300">
            Important
          </h2>

          <p className="mt-2 leading-7 text-amber-800 dark:text-amber-400">
            Make sure to export your work before refreshing the page or
            leaving the app. Your notes may not be saved otherwise.
          </p>
        </div>
      </div>
    </main>
  );
}