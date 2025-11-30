---
title: "The power of personas"
duration: 4 min
learningObjectives:
  - Understand how personas narrow AI's response focus
  - Learn to select the right persona for different tasks
  - Apply personas to improve prompt quality
---

## The power of personas

Now that you understand what is happening under the hood, let us explore our first major technique for improving prompts: personas.

### Who is answering your question?

Consider this scenario: You need advice about planning a trip to Japan. AI does not exist. Who would you ask?

Maybe you would ask a friend who has traveled to Japan multiple times. Or a professional travel agent who specializes in Asian destinations. Or someone who grew up in Japan and knows the culture intimately. Or a budget travel blogger who knows how to stretch every dollar.

Each of these people would give you different advice based on their expertise, perspective, and priorities. The friend might emphasize hidden gems they discovered. The travel agent might focus on logistics and timing. The local might point you toward experiences tourists usually miss. The budget blogger might share money-saving tricks.

Now here is the key insight: **AI can be any of these people. Or none of them.**

When you give AI no persona, it defaults to a generic, voiceless assistant mode. It gives you information that could have been written by anyone, which means it was essentially written by no one in particular. The response has no personality, no expertise, no point of view.

But when you assign a persona, the AI shifts its entire response pattern to match that identity. The vocabulary changes. The priorities change. The style changes. The specific recommendations change.

### Applying a persona to our running example

Let us evolve our Japan prompt with a persona:

```
You are an experienced Japan travel consultant who has helped hundreds of first-time visitors plan their trips over the past 15 years. You know the country intimately, understand common mistakes tourists make, and have insider knowledge about the best experiences.

Plan me a trip to Japan.
```

Even though we have not added many other details yet, this prompt will generate a noticeably different response. The AI now has a perspective to adopt. It will share advice that sounds like it comes from someone with deep, practical experience rather than someone reading from a Wikipedia summary.

The result might include warnings about common tourist traps, recommendations for experiences that are popular with locals, and the kind of practical advice that only comes from extensive real-world experience.

### How personas narrow the AI's focus

Remember our earlier discussion about probability? A persona dramatically narrows the space of possible responses.

Without a persona, the AI could respond as a cautious advisor, an enthusiastic travel blogger, a practical accountant focused on budget, a cultural expert focused on history, or countless other voices. All of these are valid completions.

With a specific persona, you eliminate most of those options. The AI now knows to complete the pattern in a voice that matches the assigned identity.

### Common useful personas

Here are some personas that work well across different situations:

**The Patient Teacher:** "You are a patient and encouraging teacher explaining this concept to a complete beginner."

**The Experienced Expert:** "You are a senior professional with 20 years of experience in this field."

**The Skeptical Critic:** "You are a careful critic who identifies weaknesses and potential problems."

**The Enthusiastic Guide:** "You are an enthusiastic guide who makes complex topics accessible and exciting."

**The Practical Advisor:** "You are a pragmatic advisor focused on actionable, realistic recommendations."

**The Devil's Advocate:** "You are a devil's advocate who challenges assumptions and considers alternative viewpoints."

### System prompts vs. user prompts

You might notice that some AI interfaces have a separate field for "system prompts" or "custom instructions." These are places where you can set a persistent persona that applies to every conversation.

For now, do not worry about the technical distinction. The techniques you are learning work whether you include the persona at the beginning of a regular prompt or in a dedicated system prompt field. The important thing is that you are telling the AI who to be.

### Exercise: Add a persona to your prompt

Return to the prompt you created in Chapter 1. Now add a relevant persona at the beginning.

Think about who would give you the best possible answer to your question. What kind of expert, advisor, or helper would you want? Describe that person and ask them your question.

Compare this response to your original. Notice how the voice, focus, and specific content change when you give the AI a clear identity to inhabit.
