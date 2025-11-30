---
title: "Controlling the output"
duration: 4 min
learningObjectives:
  - Learn to specify output format, structure, and length
  - Understand how tone control affects responses
  - Apply formatting requirements to get exactly what you need
---

## Controlling the output

You have learned to assign a persona and provide context. Now let us add another powerful technique: telling the AI exactly how to format and present its response.

Many people forget that they can control not just what the AI tells them, but how it tells them. This is one of the techniques that packs the biggest punch for the least effort.

### You can (and should) tell AI exactly what you want

The AI is not committed to any particular response format. It can give you bullet points, numbered lists, tables, detailed prose, brief summaries, code, JSON, markdown, or almost any structure you can describe.

If you do not specify, you get whatever the AI's default is, which is usually a mix of paragraphs and bullet points that may or may not suit your needs.

When you specify exactly what you want, you get exactly what you want.

### Format options

**Bullet lists:** Best for quick scanning and comparing options

**Numbered steps:** Best for processes, instructions, or ranked items

**Tables:** Best for comparing multiple items across multiple dimensions

**Headers and sections:** Best for organizing long content into navigable parts

**Prose paragraphs:** Best for explanations, stories, or when you want a natural reading flow

**JSON or structured data:** Best when you need to process the output programmatically

**Markdown:** Best when you want formatted text you can use in documents or websites

### Tone control

You can also specify the tone of the response:

**Formal:** Professional, suitable for business contexts

**Casual:** Friendly and conversational

**Enthusiastic:** Energetic and encouraging

**Matter-of-fact:** Just the facts, no embellishment

**Empathetic:** Warm and understanding

**Direct:** Blunt and to the point, no hedging

### Length constraints

Be explicit about how much content you want:

**Word or sentence limits:** "Keep each description under 50 words"

**Brevity requests:** "Be concise" or "Give me the short version"

**Comprehensiveness requests:** "Be thorough" or "Include all relevant details"

**Proportional guidance:** "Spend more time on X and less on Y"

### Structure requirements

You can specify exactly how content should be organized:

**Specific sections:** "Include sections on cost, time required, and difficulty"

**Ordered elements:** "Start with the most important point"

**Template matching:** "Follow this exact structure: [provide template]"

**Progressive detail:** "Start with a summary, then go into detail"

### Evolving our running example

Let us add output formatting to our Japan prompt:

> You are an experienced Japan travel consultant who has helped hundreds of first-time visitors plan their trips over the past 15 years.
>
> I'm planning my first trip to Japan with the following details:
> [All our context from Chapter 4]
>
> **Please provide a day-by-day itinerary in a table format with these columns:**
> - **Date** (April 5-19)
> - **Location** (which city/area I'll be in)
> - **Morning Activity** (brief description, 10-15 words)
> - **Afternoon Activity** (brief description, 10-15 words)
> - **Evening Activity** (brief description, 10-15 words)
> - **Estimated Daily Cost** (in USD, excluding accommodation)
>
> **After the table, include:**
> 1. A brief section on recommended accommodations for each location
> 2. Must-know tips specific to April travel in Japan
> 3. A packing checklist tailored to this itinerary
>
> **Keep all descriptions concise and practical. Focus on specifics rather than generalities.**

Now the AI knows exactly what to produce. You will get a structured table you can actually use for planning, followed by organized supplementary information in the exact sections you requested.

Compare this to the vague "Plan me a trip to Japan" prompt. Instead of paragraphs of generic advice, you get a practical planning document.

### The format most people forget

One of the most powerful formatting techniques is also the most overlooked: asking for trade-offs, pros and cons, or decision-relevant information.

Instead of asking "What should I do?", ask "What are the options, and what are the trade-offs for each?"

> Give me 3 options for how to spend Day 3, with pros and cons for each based on my stated preferences.

This transforms the AI from someone who makes decisions for you into an advisor who helps you make informed decisions yourself.

### Exercise: Specify your output format

Take your evolving prompt and add specific output formatting instructions.

Consider:
- What format would be most useful for your needs? (List? Table? Sections?)
- What tone is appropriate?
- How much detail do you want?
- Should there be specific sections or categories?
- Would comparisons or trade-offs be helpful?

Add these formatting instructions and compare the results to your previous attempts.
