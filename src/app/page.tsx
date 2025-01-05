import { ProjectCarousel } from './components/ProjectsCarousel';

export default function Page() {
  return (
    <section>
      <h1 className='text-2xl font-semibold tracking-tighter'>
        Christopher Vestman
      </h1>
      <p className=''>
        I have a passion for math, physics &amp; football. When not online, I
        like to <s>eat,</s> cook, game or listening to podcasts.
      </p>
      <div className='mt-4'>
        <ProjectCarousel />
      </div>
    </section>
  );
}
