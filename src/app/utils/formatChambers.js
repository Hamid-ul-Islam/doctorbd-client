import React from "react";

export function formatChambers(text) {
  try {
    text = text.replace(/Address:/g, "\nAddress:");
  } catch (error) {}
  try {
    text = text.replace(/Visiting Hour:/g, "\nVisiting Hour:");
  } catch (error) {}

  try {
    text = text.replace(/Appointment:/g, "\n>Appointment :");
  } catch (error) {}

  try {
    text = text.replace(/Call Now, /g, "\n\n");
  } catch (error) {}

  // Remove "Call Now"
  return text;
}
