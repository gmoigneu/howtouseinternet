---
title: "Putting it all together"
duration: 6 min
learningObjectives:
  - Recognize that clear thinking produces clear prompts
  - Learn to diagnose prompt failures systematically
  - Build effective prompts by combining all techniques
---

## Putting it all together

We have covered personas, context, output formatting, few-shot examples, and reasoning techniques. Now it is time to understand how these pieces fit together and why some people consistently get excellent results while others struggle.

### Clear thinking produces clear prompts

There is a pattern among people who write effective prompts: they know what they want before they start typing.

This sounds obvious, but most prompt failures trace back to unclear thinking. When you ask for "help with my project" or "ideas for my presentation," you are asking the AI to guess what you actually need. The AI cannot read your mind. It can only work with what you give it.

Each technique we covered is really a different way of clarifying your own thinking:

- Choosing a **persona** means deciding who would best answer your question
- Providing **context** means identifying what facts actually matter
- Specifying **output format** means picturing what a useful result looks like
- Creating **examples** means demonstrating rather than describing
- Using **reasoning steps** means breaking down how to approach the problem

The techniques are not just instructions for the AI. They are a framework for organizing your own thoughts.

### Diagnosing prompt failures

When a prompt does not work, resist the urge to immediately try random variations. Instead, run through a diagnostic checklist:

**Did I explain my situation?** The AI knows nothing about you unless you tell it. Your job title, your deadline, your audience, your constraints—none of this is obvious.

**Did I specify the perspective?** A financial advisor, a skeptical friend, and an enthusiastic salesperson would all answer the same question differently. Which perspective do you actually want?

**Did I describe a good answer?** If you cannot picture what success looks like, neither can the AI. Format, length, tone, structure—be explicit.

**Did I provide enough detail?** Every missing detail is a gap the AI fills with assumptions. Those assumptions are often wrong.

**Would this work for a human?** Imagine handing your prompt to a capable stranger with no background on your situation. Could they give you a useful response? If not, add what is missing.

Most of the time, working through these questions reveals exactly what went wrong.

### The full transformation

Let us see the complete journey from our first chapter to now.

**Where we started:**

```
Plan me a trip to Japan.
```

This prompt could be answered in thousands of ways. The AI has no idea who you are, what you like, how long you are staying, or what matters to you.

**Where we are now:**

```
You are an experienced Japan travel consultant who has helped hundreds of first-time visitors plan their trips over the past 15 years. You know the country intimately, understand common mistakes tourists make, and have insider knowledge about the best experiences.

I'm planning my first trip to Japan with the following details:

Budget: $3000 for everything except flights (already booked)
Duration: 2 weeks, arriving April 5th, departing April 19th
Interests: Food (local and regional specialties), traditional culture (temples, shrines, gardens), photography. NOT interested in hiking, nightlife, or anime/gaming culture.
Travel style: Moderate pace. Prefer depth over breadth. Some structure with room for spontaneity.
Physical considerations: Can walk 5-6 miles/day comfortably. Minor knee issues with steep stairs.
Accommodation preference: Mid-range hotels or traditional ryokans. Want at least one ryokan experience.

Before creating the itinerary, think through:
1. Route optimization: most logical geographical flow, minimizing backtracking
2. Seasonal factors: cherry blossom timing and locations for April 5-19
3. Pace considerations: right number of regions given my constraints
4. Experience balance: temples, food, photography across the trip

Then provide a day-by-day itinerary in this format:

| Date | Location | Morning | Afternoon | Evening | Est. Cost |
|------|----------|---------|-----------|---------|-----------|
| April 5 | Tokyo (Asakusa) | Arrive Narita, train to Asakusa. Check into ryokan. | Explore Senso-ji Temple. | Dinner at Sometaro (okonomiyaki). Walk Nakamise at night. | $45 |

Follow this exact level of specificity: actual restaurant names where possible, booking notes, specific attractions rather than vague suggestions.

After the itinerary, include:
1. Accommodation recommendations for each location (with prices)
2. April-specific travel tips
3. A packing checklist for this itinerary

If you're unsure about current hours, prices, or recent changes, please say "verify current [X]" rather than guessing.
```

Every technique appears in this prompt: a defined persona, rich context about the traveler, explicit formatting requirements, a concrete example of the desired output, and structured reasoning steps. The AI now has everything it needs to produce a genuinely useful response.

### Building on what works

As you develop prompts that work well, save them. Keep a collection of:

- Templates for tasks you do regularly
- Persona descriptions you find yourself reusing
- Output formats that match your needs
- Examples that demonstrate your preferences

When you face a similar task, start from your collection rather than from scratch. Modify what already works rather than reinventing each time.

Over time, you will notice patterns. Certain structures work well for certain types of requests. Certain phrasings consistently produce better results. Your personal prompt library becomes increasingly valuable.

### Beyond prompting

The skills you have developed in this course extend well beyond AI interactions.

When you learn to specify context clearly, you become better at briefing colleagues. When you practice defining what success looks like, you become better at setting expectations. When you break complex requests into steps, you become a clearer communicator in general.

Every time you write a good prompt, you are practicing the discipline of precise communication. That discipline transfers to emails, meetings, project specifications, and any situation where you need to convey what you actually want.

### Final exercise

Return to the prompt you created in Chapter 1. Rewrite it from scratch using everything you have learned:

1. Add a relevant persona
2. Include all the context that matters
3. Specify exactly how you want the output formatted
4. Provide an example if it would help
5. Request reasoning steps if the problem is complex

Compare your new prompt and its response to your original attempt. The difference demonstrates what you have learned.

You now have a reliable method for getting useful results from AI. The techniques are simple, but applying them consistently takes practice. The more you use them, the more natural they become.

---

## Sources and further learning

To continue developing your prompting skills, explore these official resources:

**Official AI documentation:**
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering Documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- [Google AI Prompting Guide](https://ai.google.dev/gemini-api/docs/prompting-intro)

The principles in this course apply across all AI assistants. As the technology evolves, clear communication remains the foundation of effective use.
