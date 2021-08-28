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
  }

  interface Form {
    fields: {
      id: string;
      title: string;
      placeholder: string;
      required: boolean;
    }[];
    submitText: string;
    footnote?: string;
  }

  interface Card {
    title: string;
    subtitle: string;
    content: Markdown;
    image: Image;
  }

  interface CardBlock {
    template: "cardblock";
    title: string;
    cards: Card[];
  }

  interface HeroBlock {
    template: "heroblock";
    title: string;
    content: Markdown;
    cta: CallToAction;
  }

  interface ImageBlock {
    template: "imageblock";
    title: string;
    subtitle: string;
    subtitleIcon: boolean;
    flipped: boolean;
    muted: boolean;
    image: Image;
    content: Markdown;
    cta: CallToAction;
  }

  interface NewsletterBlock {
    template: "newsletterblock";
    title: string;
    subtitle: string;
    subtitleIcon: boolean;
    flipped: boolean;
    image: Image;
    content: Markdown;
    form: Form;
  }

  interface TextBlock {
    template: "textblock";
    title: string;
    subtitle: string;
    content: Markdown;
    cta: CallToAction;
  }

  type Block = CardBlock | HeroBlock | ImageBlock | NewsletterBlock | TextBlock;

  interface Page {
    title: string;
    description: string;
    image: string;
    blocks: Block[];
  }

  interface MenuItem {
    title: string;
    page: string;
  }

  interface Menu {
    pages: MenuItem[];
  }

  interface Footer {
    legal_pages: MenuItem[];
  }
}
