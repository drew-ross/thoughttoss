import { ISuggestion } from "@/interfaces";

const suggestions: ISuggestion[] = [
  {
    text: "What am I thinking about?",
    cols: 1,
    next: 2,
    followup: false,
  },
  {
    text: "Why am I thinking about this?",
    cols: 1,
    next: 3,
    followup: true,
  },
  {
    text: "How should I act on this thought?",
    cols: 1,
    next: null,
    followup: true,
  },
  {
    text: "What is giving me anxiety?",
    cols: 1,
    next: 5,
    followup: false,
  },
  {
    text: "Why is this giving me anxiety?",
    cols: 1,
    next: 6,
    followup: true,
  },
  {
    text: "What actions can I take?",
    cols: 1,
    next: null,
    followup: true,
  },
  {
    text: "What are the pros and cons?",
    cols: 2,
    next: null,
    followup: false,
    col1: "Pros",
    col2: "Cons",
  },
];

export default suggestions;
