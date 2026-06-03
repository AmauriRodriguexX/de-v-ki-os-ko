import React from "react";
import { Outlet } from "react-router";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { BottomNavBar } from "./molecules/BottomNavBar";
import { FABGroup } from "./molecules/FABGroup";
import { Chatbot } from "./organisms/Chatbot";
import { ChatbotProvider } from "../context/ChatbotContext";

export function Layout() {
  return (
    <ChatbotProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <BottomNavBar />
        <FABGroup />
        <Chatbot />
      </div>
    </ChatbotProvider>
  );
}