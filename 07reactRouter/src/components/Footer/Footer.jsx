import { Link } from "react-router-dom";
import { FaGithub, FaDiscord, FaTwitter, FaFacebook, FaDribbble } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white border-y py-10">
            <div className="container mx-auto px-4">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Resources</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <Link to="/" className="hover:text-gray-50 transition-colors duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-gray-50 transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Follow us</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:text-gray-50 transition-colors duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-gray-50 transition-colors duration-300">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Legal</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <Link to="#" className="hover:text-gray-50 transition-colors duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-gray-50 transition-colors duration-300">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-50 transition-colors duration-300">
                            <FaFacebook className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-50 transition-colors duration-300">
                            <FaDiscord className="w-5 h-5" />
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-50 transition-colors duration-300">
                            <FaTwitter className="w-5 h-5" />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-50 transition-colors duration-300">
                            <FaGithub className="w-5 h-5" />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-50 transition-colors duration-300">
                            <FaDribbble className="w-5 h-5" />
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
