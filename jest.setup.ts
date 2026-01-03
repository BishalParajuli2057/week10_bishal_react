import { TextEncoder, TextDecoder } from "util";

// Polyfill for react-router-dom in Jest/JSDOM
const g = global as unknown as {
  TextEncoder?: typeof TextEncoder;
  TextDecoder?: typeof TextDecoder;
};
g.TextEncoder = TextEncoder;
g.TextDecoder = TextDecoder;

// Make sure i18n is initialized for tests
import "./src/i18n";
