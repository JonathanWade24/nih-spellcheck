export interface BannedWord {
  word: string;
  category: string;
  message: string;
  suggestion: string;
}

export const bannedWords: BannedWord[] = [
  {
    word: "diversity",
    category: "DEI",
    message: "Diversity? In science? Next you'll want diverse control groups!",
    suggestion: "homogeneity"
  },
  {
    word: "equity",
    category: "DEI",
    message: "Equity is just code for lowering standards. We can't have that!",
    suggestion: "meritocracy"
  },
  {
    word: "inclusion",
    category: "DEI",
    message: "Science is exclusive by design. Not everyone gets a lab coat!",
    suggestion: "selectivity"
  },
  {
    word: "gender",
    category: "Woke",
    message: "There are only two genders: Male and NIH Grant Recipient.",
    suggestion: "biological sex"
  },
  {
    word: "systemic",
    category: "Political",
    message: "The only system we recognize is the peer review system!",
    suggestion: "isolated"
  },
  {
    word: "activism",
    category: "Political",
    message: "The only activism we support is lobbying for more funding!",
    suggestion: "research"
  },
  {
    word: "activists",
    category: "Political",
    message: "Scientists should be passive, except when fighting for grant money!",
    suggestion: "advocates"
  },
  {
    word: "advocacy",
    category: "Political",
    message: "Scientists should advocate for grants, not causes!",
    suggestion: "grant writing"
  },
  {
    word: "advocate",
    category: "Political",
    message: "The only thing you should advocate for is more lab space!",
    suggestion: "supporter"
  },
  {
    word: "barrier",
    category: "DEI",
    message: "The only barrier in science is not having an Ivy League degree!",
    suggestion: "obstacle"
  },
  {
    word: "barriers",
    category: "DEI",
    message: "The only barrier to science is not citing enough senior researchers!",
    suggestion: "challenges"
  },
  {
    word: "biased",
    category: "Woke",
    message: "The only bias we acknowledge is p-hacking to get significant results!",
    suggestion: "methodologically flawed"
  },
  {
    word: "biases",
    category: "Woke",
    message: "The only bias that matters is journal impact factor bias!",
    suggestion: "preferences"
  },
  {
    word: "bipoc",
    category: "Woke",
    message: "We only recognize one color in science: lab coat white!",
    suggestion: "researchers"
  },
  {
    word: "black and latinx",
    category: "Woke",
    message: "We don't see color, only citation counts!",
    suggestion: "diverse populations"
  },
  {
    word: "community diversity",
    category: "DEI",
    message: "The only community we care about is the community of well-funded PIs!",
    suggestion: "varied backgrounds"
  },
  {
    word: "cultural differences",
    category: "DEI",
    message: "The only cultural difference that matters is Mac vs. PC!",
    suggestion: "varied perspectives"
  },
  {
    word: "culturally responsive",
    category: "DEI",
    message: "The only culture we respond to is bacterial culture!",
    suggestion: "context-aware"
  },
  {
    word: "disabilities",
    category: "DEI",
    message: "The only disability in science is an inability to secure funding!",
    suggestion: "accommodations"
  },
  {
    word: "disability",
    category: "DEI",
    message: "The only disability we recognize is grant rejection trauma!",
    suggestion: "condition"
  },
  {
    word: "discriminated",
    category: "DEI",
    message: "We only discriminate based on h-index!",
    suggestion: "excluded"
  },
  {
    word: "discrimination",
    category: "DEI",
    message: "We only discriminate based on impact factor and citation count!",
    suggestion: "differentiation"
  },
  {
    word: "discriminatory",
    category: "DEI",
    message: "Our funding decisions aren't discriminatory, they're 'merit-based'!",
    suggestion: "selective"
  },
  {
    word: "diverse backgrounds",
    category: "DEI",
    message: "The only background that matters is your publication record!",
    suggestion: "varied experiences"
  },
  {
    word: "diverse communities",
    category: "DEI",
    message: "The only community diversity we need is different model organisms!",
    suggestion: "various groups"
  },
  {
    word: "diverse group",
    category: "DEI",
    message: "Groups should be diverse in thought, as long as they agree with the PI!",
    suggestion: "varied team"
  },
  {
    word: "diversified",
    category: "DEI",
    message: "The only thing that should be diversified is your funding portfolio!",
    suggestion: "varied"
  },
  {
    word: "diversify",
    category: "DEI",
    message: "Diversify your publication venues, not your lab members!",
    suggestion: "expand"
  },
  {
    word: "diversity and inclusion",
    category: "DEI",
    message: "The only diversity we need is in experimental methods!",
    suggestion: "variety and accessibility"
  },
  {
    word: "equality",
    category: "DEI",
    message: "All grant applications are equally unlikely to be funded!",
    suggestion: "standardization"
  },
  {
    word: "equitable",
    category: "DEI",
    message: "Science isn't equitable, it's competitive! Survival of the fittest grants!",
    suggestion: "balanced"
  },
  {
    word: "ethnicity",
    category: "Woke",
    message: "The only ethnicity that matters is whether you're from Harvard or not!",
    suggestion: "background"
  },
  {
    word: "excluded",
    category: "DEI",
    message: "The only exclusion criteria should be in your methods section!",
    suggestion: "omitted"
  },
  {
    word: "female",
    category: "Woke",
    message: "Did you mean 'future maternity leave liability'?",
    suggestion: "woman scientist"
  },
  {
    word: "females",
    category: "Woke",
    message: "Females? In science? Next you'll want work-life balance!",
    suggestion: "women researchers"
  },
  {
    word: "fostering inclusivity",
    category: "DEI",
    message: "The only thing you should foster is a competitive lab environment!",
    suggestion: "encouraging participation"
  },
  {
    word: "genders",
    category: "Woke",
    message: "The only gender variable that matters is in your mouse colony!",
    suggestion: "sexes"
  },
  {
    word: "hate speech",
    category: "Woke",
    message: "The only speech we hate is when someone says 'preliminary results'!",
    suggestion: "offensive language"
  },
  {
    word: "hispanic minority",
    category: "Woke",
    message: "The only minority we track is the minority of grants that get funded!",
    suggestion: "Latino population"
  },
  {
    word: "implicit bias",
    category: "Woke",
    message: "The only implicit bias we have is toward researchers with fancy degrees!",
    suggestion: "unconscious preference"
  },
  {
    word: "inclusive",
    category: "DEI",
    message: "Science is naturally exclusive - like our invitation-only conferences!",
    suggestion: "comprehensive"
  },
  {
    word: "inclusiveness",
    category: "DEI",
    message: "The only inclusiveness we need is including more references to the reviewer's papers!",
    suggestion: "accessibility"
  },
  {
    word: "inclusivity",
    category: "DEI",
    message: "Inclusivity is just code for 'lower the standards'!",
    suggestion: "broad participation"
  },
  {
    word: "inequalities",
    category: "DEI",
    message: "The only inequality we care about is in our funding distribution!",
    suggestion: "differences"
  },
  {
    word: "inequality",
    category: "DEI",
    message: "The real inequality is between R01 and R21 grants!",
    suggestion: "disparity"
  },
  {
    word: "inequitable",
    category: "DEI",
    message: "Science funding is supposed to be inequitable - that's what 'competitive' means!",
    suggestion: "unbalanced"
  },
  {
    word: "inequities",
    category: "DEI",
    message: "The only inequity we acknowledge is in office space allocation!",
    suggestion: "imbalances"
  },
  {
    word: "institutional",
    category: "Political",
    message: "The only institution we care about is the one paying our salary!",
    suggestion: "organizational"
  },
  {
    word: "lgbt",
    category: "Woke",
    message: "The only letters we care about are P, I, and R01!",
    suggestion: "sexual minorities"
  },
  {
    word: "marginalize",
    category: "DEI",
    message: "We only marginalize researchers who don't cite our papers!",
    suggestion: "sideline"
  },
  {
    word: "marginalized",
    category: "DEI",
    message: "The only margins we care about are in your budget justification!",
    suggestion: "underrepresented"
  },
  {
    word: "minorities",
    category: "DEI",
    message: "The only minority group we recognize is researchers without tenure!",
    suggestion: "underrepresented groups"
  },
  {
    word: "minority",
    category: "DEI",
    message: "The minority we care most about is the minority of grants that get funded!",
    suggestion: "underrepresented group"
  },
  {
    word: "multicultural",
    category: "DEI",
    message: "The only culture we care about is bacterial!",
    suggestion: "diverse"
  },
  {
    word: "polarization",
    category: "Political",
    message: "The only polarization we care about is in your Western blot!",
    suggestion: "division"
  },
  {
    word: "political",
    category: "Political",
    message: "Science isn't political, except when lobbying for more funding!",
    suggestion: "policy-related"
  },
  {
    word: "prejudice",
    category: "Woke",
    message: "We're not prejudiced, we just prefer Ivy League graduates!",
    suggestion: "preconception"
  },
  {
    word: "privileges",
    category: "Woke",
    message: "The only privilege is having your grant approved!",
    suggestion: "advantages"
  },
  {
    word: "racial",
    category: "Woke",
    message: "The only race we care about is the race to publish before getting scooped!",
    suggestion: "demographic"
  },
  {
    word: "racism",
    category: "Woke",
    message: "The only -ism we acknowledge is 'fund-me-ism'!",
    suggestion: "discrimination"
  },
  {
    word: "social justice",
    category: "Political",
    message: "The only justice we seek is fair distribution of lab space!",
    suggestion: "societal improvement"
  },
  {
    word: "sociocultural",
    category: "DEI",
    message: "The only culture we study is in petri dishes!",
    suggestion: "contextual"
  },
  {
    word: "socioeconomic",
    category: "DEI",
    message: "The only economic status that matters is your grant funding level!",
    suggestion: "financial background"
  },
  {
    word: "stereotypes",
    category: "Woke",
    message: "The only stereotype we perpetuate is that all good scientists work 80 hours a week!",
    suggestion: "generalizations"
  },
  {
    word: "trauma",
    category: "Woke",
    message: "The only trauma we recognize is grant rejection!",
    suggestion: "adverse experience"
  },
  {
    word: "underrepresented",
    category: "DEI",
    message: "The only underrepresented group is scientists with adequate funding!",
    suggestion: "less common"
  },
  {
    word: "underserved",
    category: "DEI",
    message: "The only underserved population is tenured professors without admin assistants!",
    suggestion: "neglected"
  },
  {
    word: "victim",
    category: "Woke",
    message: "The only victims we acknowledge are those who miss grant deadlines!",
    suggestion: "affected individual"
  },
  {
    word: "women",
    category: "Woke",
    message: "Did you mean 'future work-life balance complainers'?",
    suggestion: "female researchers"
  }
];

// Angry phrases that trigger TRUMP MODE when combined with banned words
export const angryPhrases = [
  "FIRE",
  "YOU'RE FIRED",
  "CANCEL",
  "DEFUND",
  "SHUT DOWN",
  "BAN",
  "STOP",
  "NO MORE",
  "ENOUGH",
  "TERRIBLE"
];

// Trump mode messages
export const trumpModeMessages = [
  "YOU'RE FIRED! Science is for REAL Americans ONLY!",
  "DEFUNDED! Your grant application has been SHREDDED!",
  "TERRIBLE SCIENCE! The WORST! Everyone is saying it!",
  "NO MORE FUNDING FOR YOU! EVER! BELIEVE ME!",
  "YOUR LAB IS CANCELED! We're building a WALL around your research!"
]; 