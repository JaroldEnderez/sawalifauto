import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Navbar () {
    return (
        <header className="bg-gray-900 text-white text-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-end gap-4 px-6 py-2">
            <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
            <a href="#" className="hover:text-sky-400"><Twitter size={24} /></a>
            <a href="#" className="hover:text-pink-400"><Instagram size={24} /></a>
            <a href="#" className="hover:text-red-500 mr-8"><Youtube size={24} /></a>
            <h1 className="text-2xl font-bold text-white">Sawalifauto</h1>
            </div>
        </header>
    )
}