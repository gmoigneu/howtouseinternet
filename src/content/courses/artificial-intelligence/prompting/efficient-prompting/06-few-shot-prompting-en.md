---
title: "Learning from examples (few-shot prompting)"
duration: 5 min
learningObjectives:
  - Understand the difference between zero-shot and few-shot prompting
  - Learn why showing examples is more powerful than describing
  - Apply few-shot techniques to get precisely formatted outputs
---

## Learning from examples (few-shot prompting)

So far, we have been telling the AI what we want through descriptions and instructions. Now let us explore an even more powerful technique: showing the AI what we want through examples.

This approach is called "few-shot prompting" because you provide a few examples (shots) that demonstrate the pattern you want the AI to follow.

### Zero-shot vs. few-shot

Everything we have done until now has been "zero-shot" prompting, where we provide instructions without examples. This works well for straightforward requests, especially when combined with good personas, context, and formatting instructions.

But sometimes, showing is more powerful than telling.

When you provide examples of the output you want, the AI does not need to interpret your instructions. It can see exactly what you mean. The pattern is demonstrated, not just described.

### Why showing is more powerful than telling

Consider trying to explain a particular writing style:

```
Write in a casual but informative tone, using occasional humor and direct address, with short paragraphs and punchy sentences.
```

This gives the AI something to work with, but there is still room for interpretation. What exactly does "occasional humor" mean? How short are the paragraphs? What makes a sentence "punchy"?

Now consider showing an example:

```
Write in this style:

"Here's the thing about passwords: we all know they should be strong, unique, and impossible to remember. Great. Thanks. Super helpful.

But there's actually a way out of this mess. It's called a password manager, and once you start using one, you'll wonder why you ever tried to remember 47 variations of your dog's name."

Now write about two-factor authentication in the same style.
```

The AI can now match the tone, structure, sentence length, and humor style exactly because it has a concrete example to follow.

### What to show in your examples

Your examples can demonstrate any aspect of the response you care about:

**Tone:** How formal, casual, or enthusiastic the writing should be

**Structure:** How information should be organized and presented

**Level of detail:** How much explanation to include for each point

**Vocabulary:** What kind of words and terminology to use

**Length:** How long each section or item should be

**Perspective:** What point of view to write from

### Evolving our running example

Let us add a few-shot example to our Japan prompt. We will show the AI exactly what we want one day of the itinerary to look like:

```
You are an experienced Japan travel consultant who has helped hundreds of first-time visitors plan their trips over the past 15 years.

I'm planning my first trip to Japan with the following details:
[All our context from Chapter 4]

Here is an example of exactly how I want each day formatted:

| Date | Location | Morning | Afternoon | Evening | Est. Cost |
|------|----------|---------|-----------|---------|-----------|
| April 5 | Tokyo (Asakusa) | Arrive Narita, train to Asakusa. Check into ryokan. | Explore Senso-ji Temple. | Dinner at Sometaro (okonomiyaki, book ahead). Walk Nakamise at night. | $45 |

For accommodations, format like this:
- Tokyo (April 5-8): Sadachiyo Sukeroku no Yado - Traditional ryokan in Asakusa, $150/night. Perfect for first Japan nights, includes breakfast.

Please complete the remaining days following this exact format and style. Note the level of specificity: actual restaurant names where possible, booking notes, specific attractions rather than vague "explore the city" suggestions.
```

Now the AI has a crystal-clear template to follow. Every day will match the format of your example. The level of detail, the structure, even the parenthetical notes will be consistent.

### When few-shot is essential

Some situations almost require few-shot prompting:

**Matching a brand voice:** If you need content that sounds like your company's existing materials, show examples of that voice.

**Unusual formats:** If you need an unconventional structure, show what it looks like.

**Specific technical formats:** If you need code, data, or structured output in a particular style, show that style.

**Subjective quality standards:** If "good" is hard to define in your context, show examples of what "good" looks like to you.

### Building your own prompt library

As you develop prompts that work well, save them. Build a personal library of effective prompts and examples that you can reuse and adapt.

Include:
- The full prompt text
- Why it works well
- What context it was designed for
- Examples of good outputs it produced

This library becomes increasingly valuable over time. Instead of crafting every prompt from scratch, you adapt proven templates.

### Exercise: Create an example output

For your evolving prompt, create an example of exactly what you want the output to look like.

Write out one complete instance: if you want a list, write one ideal item. If you want analysis, write one paragraph exactly as you would want it. If you want code, write a sample in the exact style you prefer.

Add this example to your prompt with a note like "Follow this exact style and level of detail."

Compare the results to your previous attempts. Notice how precisely the AI matches your demonstrated pattern.
