const Footer = () => {
  return (
    <footer className="border-t border-ghost/15 py-10 text-center text-indigo-200/70 text-sm relative z-10">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} Madhav Dhyani. All rights reserved.</p>
        <p className="text-xs text-indigo-300/50 mt-1">
          Designed with Liquid Glass UI &amp; Persian Indigo aesthetics
        </p>
      </div>
    </footer>
  );
};

export default Footer;