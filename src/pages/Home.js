import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Slider/></div>
      <div><Card/></div>
      <div><Footer /></div>
    </div>
  );
}
