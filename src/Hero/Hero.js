import { Card } from '../Cards/Card';
import { HeroContainer } from "./HeroContainer";
import { CardContainer } from "../Cards/CardContainer";
import { GetStartedButton } from "../Buttons/GetStartedButton";

export function Hero() {
  return (
    <section className='Hero'>
      <HeroContainer>
        <h1>One Page Bootstrap Website Template</h1>
        <h3>We are a team of talented designers</h3>
        <GetStartedButton />
      </HeroContainer>
      <CardContainer>
        <Card text='Lorem Ipsum' subtext='The Assyrian came down like the wolf on the fold, And his cohorts were gleaming in purple and gold; And the sheen of their spears was like stars on the sea, When the blue wave rolls nightly on deep Galilee.' />
        <Card text='Sed ut perspiciatis' subtext='The Assyrian came down like the wolf on the fold, And his cohorts were gleaming in purple and gold; And the sheen of their spears was like stars on the sea, When the blue wave rolls nightly on deep Galilee.' />
        <Card text='Magni Dolores' subtext='The Assyrian came down like the wolf on the fold, And his cohorts were gleaming in purple and gold; And the sheen of their spears was like stars on the sea, When the blue wave rolls nightly on deep Galilee.' />
        <Card text='Nemo Enis' subtext='The Assyrian came down like the wolf on the fold, And his cohorts were gleaming in purple and gold; And the sheen of their spears was like stars on the sea, When the blue wave rolls nightly on deep Galilee.' />
      </CardContainer>
    </section>
  );
}
;
