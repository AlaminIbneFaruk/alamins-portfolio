import React from "react";

const Footer = () => {
  return (
    <div className="border-t-4 container border-neutral-content mx-auto">
      <footer class="py-6  text-center text-gray-400">
        <div>© 2025 Al Amin Ibne Faruk Ayon | All Rights Reserved</div>
        <div class="flex justify-center space-x-6 mt-3 flex-wrap">
          <a
            href="https://github.com/AlaminIbneFaruk"
            target="_blank"
            class="hover:text-white"
          >
            GitHub : AlaminIbneFaruk
          </a>
          <a
            href="https://www.linkedin.com/in/alamin-ibne-faruk/"
            target="_blank"
            class="hover:text-white"
          >
            LinkedIn : https://www.linkedin.com/in/alamin-ibne-faruk/
          </a>
          <div  class="hover:text-white">
            Email : alaminibnefarukayon@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
