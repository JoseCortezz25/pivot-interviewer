export const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold">AI Coach</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-muted-foreground">
          Created by <a href="" target="_blank" rel="noopener noreferrer" className="font-bold underline">@josecortezz16</a>
        </p>
      </div>
    </footer>
  );
};