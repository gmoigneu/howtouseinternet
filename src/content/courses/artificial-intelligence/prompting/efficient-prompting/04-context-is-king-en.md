---
title: "Context is king"
duration: 5 min
learningObjectives:
  - Understand why context is the most important prompting technique
  - Learn the ABC rule: Always Be Contexting
  - Know how to prevent AI hallucinations through better context
---

## Context is king

If there is one technique in this entire course that will improve your results more than any other, it is this one: **provide context**.

Context is not just helpful. It is everything.

### ABC: Always be contexting

Here is a simple rule to remember: **ABC - Always Be Contexting.**

Every piece of relevant information you include in your prompt makes the response better. Every piece you leave out creates a gap that the AI must fill with assumptions, and those assumptions will often be wrong.

When AI gives you responses that miss the mark, it is almost always because the AI lacked context that you have but did not share.

### Why AI hallucinates

You have probably heard that AI "hallucinates," generating false information that sounds confident and correct. While this can happen for various technical reasons, there is one major cause that you can control: insufficient context.

When you ask a question without enough context, the AI must fill in the blanks. It makes assumptions about what you mean, what situation you are in, and what kind of answer you need. Sometimes these assumptions are reasonable. Often, they are not.

**More context equals less hallucination equals better results.**

When you provide detailed context, you reduce the space where the AI needs to guess. You constrain the response to areas where the AI actually has relevant training data, and you guide it toward the specific kind of information you actually need.

### What to include in context

Here are the types of context that most commonly improve responses:

**Facts about your situation:** What is actually true? What are the given circumstances? What has already happened or been decided?

**Constraints you are working within:** What are your limits? This could be budget, time, physical constraints, rules you must follow, or resources available to you.

**Your preferences:** What do you like and dislike? What matters most to you? What are you trying to optimize for?

**Your background:** What do you already know? What is your experience level? What is your role or position?

**Your purpose:** Why do you need this? What will you do with the information? Who else is involved?

### Evolving our running example

Let us transform our Japan prompt with rich context:

```
You are an experienced Japan travel consultant who has helped hundreds of first-time visitors plan their trips over the past 15 years.

I'm planning my first trip to Japan with the following details:

Budget: $3000 for everything except flights (which are already booked)

Duration: 2 weeks, arriving April 5th and departing April 19th

Interests: I love food (especially trying local and regional specialties), traditional culture (temples, shrines, gardens), and photography. I'm not interested in hiking, nightlife, or anime/gaming culture.

Travel style: Moderate pace. I'd rather see fewer places deeply than rush through many. I enjoy some structure but want flexibility for spontaneous discoveries.

Physical considerations: I can walk 5-6 miles per day comfortably but have minor knee issues with steep stairs.

Accommodation preference: Mid-range hotels or traditional ryokans. I want at least one ryokan experience.

Help me plan this trip.
```

Look at how much we have narrowed the possibilities. The AI can no longer suggest budget hostels or luxury resorts. It cannot recommend hiking mountains or Akihabara's gaming district. It cannot pack in twenty cities or suggest a lazy single-city stay.

The AI now has specific constraints to work within, and the result will reflect YOUR trip, not a generic tourist's trip.

### The permission to fail

Here is a technique many people overlook: explicitly tell the AI what to do when it does not know something.

```
If you are unsure about current pricing, opening hours, or recent changes to any location, please say "I'm not certain about current [X]" rather than providing potentially outdated information.
```

This simple addition dramatically reduces hallucination. You are giving the AI permission to admit uncertainty instead of forcing it to fill every gap with confident-sounding guesses.

### When to use web search

Many AI tools now offer web search capabilities that can access current information. Use these features when:

- You need current pricing, hours, or availability
- You want recent reviews or news about a location
- You need information about events happening after the AI's training cutoff
- You want to verify that recommendations are still accurate

If your AI tool offers web search, explicitly ask it to search for current information when needed. If it does not, be skeptical about time-sensitive details and verify them yourself.

### Warning: AI does not remember

One common mistake: assuming the AI remembers previous conversations.

Unless you are in a continuous conversation thread, the AI has no memory of what you discussed yesterday or last week. Each new conversation starts fresh. If context from a previous conversation is relevant, you need to include it again.

Even within a conversation, be careful about assuming the AI is tracking everything. For complex projects, periodically summarize the current state and key decisions to keep the AI aligned with your needs.

### Exercise: List and add your context

Return to your evolving prompt. Make a list of 5-10 pieces of context that are relevant to your request:

- What are the facts of your situation?
- What constraints are you working within?
- What are your preferences?
- What is your background?
- What is your purpose?

Add these to your prompt. Compare this response to your previous versions. Notice how much more targeted and useful the response becomes when the AI understands your specific situation.
