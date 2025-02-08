import ProjectCarousel from './components/ProjectsCarousel';

export default function Page() {
  return (
    <section>
      <h1 className='text-2xl font-medium tracking-tight'>
        Engineer &amp; Developer
      </h1>
      <div className='prose prose-neutral dark:prose-invert'>
        <p className='text-md text-neutral-700 dark:text-neutral-300 leading-relaxed'>
          I have a passion for math, physics &amp; football. When not online, I
          like to <s>eat,</s> cook, game or listening to podcasts.
        </p>
        <hr className='my-3 h-1 border-t-0 bg-neutral-100 dark:bg-white/10' />
        <ProjectCarousel />
      </div>
    </section>
  );
}
