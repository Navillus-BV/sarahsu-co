declare namespace CMS {
  type Markdown = string;

  interface Navigation {
    main: [
      {
        title: string;
        href: string;
      }
    ];
    legal: [
      {
        title: string;
        href: string;
      }
    ];
  }

  interface Site {
    title: string;
    description: string;
    url: string;
    domain: string;
    author: string;
    social: {
      twitter_card: string;
    };
  }

  interface Image {
    src: string;
    alt: string;
  }

  interface CallToAction {
    text: string;
    url: string;
    primary?: boolean;
  }

  interface Form {
    fields: {
      id: string;
      title: string;
      placeholder: string;
      required: boolean;
      type: string;
    }[];
    submitText: string;
    footnote?: string;
  }

  interface Card {
    title: string;
    icon: Image;
    content: Markdown;
  }

  interface CardBlock {
    template: "cardblock";
    title: string;
    subtitle?: string;
    cards: Card[];
    ctas?: CallToAction[];
  }

  interface HeroBlock {
    template: "heroblock";
    title: string;
    content: Markdown;
    image?: Image;
    cta: CallToAction;
  }

  interface ImageBlock {
    template: "imageblock";
    theme: "white" | "primary";
    title: string;
    subtitle: string;
    subtitleIcon: boolean;
    flipped: boolean;
    image: Image;
    content: Markdown;
    ctas: CallToAction[];
  }

  interface FormBlock {
    template: "formblock";
    title: string;
    id: string;
    description?: Markdown;
    submitText: string;
    successUrl?: string;
    footnote?: string;
    rows: {
      title?: string;
      fields: {
        id: string;
        title: string;
        placeholder: string;
        required: boolean;
        type: "text" | "email" | "number" | "date" | "textarea";
      }[];
    }[];
  }

  interface TextBlock {
    template: "textblock";
    theme: "white" | "primary";
    title: string;
    subtitle: string;
    content: Markdown;
    ctas: CallToAction[];
  }

  type Block = CardBlock | HeroBlock | ImageBlock | TextBlock | FormBlock;

  interface Page {
    title: string;
    description: string;
    image: string;
    blocks: Block[];
    href: string;
    html?: string;
  }

  interface Menu {
    pages: string[];
    cta?: CallToAction;
  }

  interface Footer {
    legal_pages: string[];
  }
}
