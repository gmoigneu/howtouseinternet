---
title: "Advanced reasoning techniques"
duration: 6 min
learningObjectives:
  - Understand Chain of Thought prompting for complex problems
  - Learn Tree of Thought for exploring multiple approaches
  - Apply adversarial validation to catch errors and blind spots
---

## Advanced reasoning techniques

Everything we have covered so far works well for straightforward requests. But what about complex problems that require genuine analysis? What about situations where there are trade-offs, multiple valid approaches, or decisions that depend on weighing various factors?

This is where advanced reasoning techniques become essential.

### When simple prompts are not enough

Some requests require the AI to actually think through a problem rather than just retrieve and format information:

- Decisions with trade-offs (choosing between options with different pros and cons)
- Problems requiring multiple steps (where later steps depend on earlier conclusions)
- Situations with constraints that interact (where optimizing one thing affects another)
- Analysis that requires considering multiple perspectives

For these situations, we need techniques that encourage deeper reasoning.

### Chain of thought: Step by step

Chain of Thought (CoT) prompting is one of the most powerful techniques for complex reasoning. The core idea is simple: ask the AI to think through the problem step by step before giving its final answer.

Why does this work? When you ask for immediate answers, the AI jumps directly to conclusions. When you ask it to reason step by step, it generates intermediate thoughts that guide it toward better conclusions. Each step builds on the previous one, and errors are more likely to be caught along the way.

The simplest form of Chain of Thought:

> Think through this step by step before giving your answer.

Or more specifically:

> Before answering, work through the following steps:
> 1. First, consider X
> 2. Then, analyze Y
> 3. Finally, evaluate Z
> 4. Now provide your recommendation based on this analysis.

### Applying chain of thought to our running example

Let us evolve our Japan prompt for a complex optimization:

> You are an experienced Japan travel consultant who has helped hundreds of first-time visitors plan their trips over the past 15 years.
>
> I'm planning my first trip to Japan with the following details:
> [All our context from Chapter 4]
>
> **Before creating the itinerary, I want you to think through the following:**
>
> 1. **Route optimization:** What's the most logical geographical flow? Consider travel times between cities and avoiding backtracking.
>
> 2. **Seasonal factors:** April 5-19 covers cherry blossom season. When and where are blossoms likely to be at peak? How should this affect our routing?
>
> 3. **Pace considerations:** Given my preference for moderate pace and the physical constraints I mentioned, what's the right number of cities/regions? What's a realistic daily rhythm?
>
> 4. **Experience balance:** How do we balance temples/shrines, food experiences, and photography opportunities across the trip?
>
> **First, share your reasoning on each of these points. Then, create the day-by-day itinerary based on this analysis.**

Now the AI must work through the complexity before proposing a solution. The final itinerary will reflect careful consideration of multiple factors rather than just listing popular destinations.

### Extended thinking and reasoning models

Some AI systems, including Claude, offer "extended thinking" or "reasoning" modes that apply Chain of Thought automatically. These modes let the AI spend more time reasoning before responding.

When available, these features are worth using for complex problems. They build in the step-by-step thinking without requiring you to prompt for it explicitly.

But even without dedicated reasoning modes, you can achieve similar effects by explicitly asking for step-by-step reasoning in your prompts.

### Tree of thought: Exploring multiple paths

Sometimes the problem is not that you need step-by-step reasoning, but that there are multiple valid approaches and you want to explore them before committing.

Tree of Thought prompting asks the AI to generate several different approaches, evaluate each one, and then recommend or synthesize the best option.

> I'd like you to generate 3 different approaches to this itinerary:
>
> **Approach A - Maximum cherry blossom focus:** Optimize entirely around seeing blossoms at their peak
>
> **Approach B - Culinary journey:** Optimize for food experiences, with blossoms as a bonus
>
> **Approach C - Balanced experience:** Equal weight to culture, food, and seasonal beauty
>
> For each approach, outline the basic structure and explain the trade-offs.
>
> Then, recommend which approach best fits my stated preferences and explain why.

This technique prevents you from getting locked into the first approach the AI thinks of. You see the landscape of possibilities before making a decision.

### Adversarial validation: Battle of the bots

Here is a powerful technique for catching problems and blind spots: have the AI argue with itself.

After getting a recommendation, ask the AI to adopt a skeptical persona and critique its own work:

> Now I want you to take on a different role.
>
> **You are a skeptical traveler who has visited Japan three times and has seen many tourist itineraries go wrong.**
>
> Review the itinerary you just created. Identify:
> - Potential problems or oversights
> - Unrealistic time allocations
> - Common mistakes this plan might lead to
> - Missing considerations
>
> Be genuinely critical. Don't hold back.

Then, after receiving the critique:

> Now, return to your consultant role and revise the itinerary based on the valid criticisms raised.

This technique catches problems that might otherwise go unnoticed. The AI's "skeptic" persona is not invested in defending the original plan and can spot weaknesses more objectively.

### When to use each technique

**Chain of Thought:** Use when the problem requires sequential reasoning, when steps depend on previous steps, or when you want to see the AI's logic.

**Tree of Thought:** Use when there are multiple valid approaches, when you want to explore options before committing, or when the "best" answer depends on priorities that could be weighted differently.

**Adversarial Validation:** Use when the stakes are high, when you want to stress-test a recommendation, or when you suspect the first answer might have blind spots.

You can also combine these techniques. Start with Chain of Thought to develop a solution, use Adversarial Validation to critique it, then refine based on the critique.

### Exercise: Apply chain of thought

Take a complex version of your prompt, one with trade-offs, multiple considerations, or decisions that require weighing different factors.

Before asking for the answer, specify the reasoning steps you want the AI to work through. Be explicit about what factors to consider and in what order.

Notice how the final answer differs when the AI has reasoned through the problem systematically versus jumping straight to conclusions.
