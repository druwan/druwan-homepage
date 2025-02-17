import ProjectCarousel from './components/ProjectsCarousel';

export default function Page() {
  return (
    <section className='w-full'>
      <h1 className='text-xl font-medium tracking-tight'>
        Engineer &amp; Developer
      </h1>
      <div className='w-full max-w-full prose prose-neutral dark:prose-invert'>
        <p className='text-night dark:text-antiFlashWhite leading-relaxed'>
          I have a passion for math, physics &amp; football. When not online, I
          like to <s className='text-burgundy dark:text-ochre'>eat,</s> cook,
          game or listening to podcasts.
        </p>
        <hr className='my-3 h-0.5 border-t-0 bg-burgundy/30 dark:bg-ochre/40' />
        <ProjectCarousel />
      </div>
    </section>
  );
}
