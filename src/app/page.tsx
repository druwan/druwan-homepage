import ProjectCarousel from './components/ProjectsCarousel';

export default function Page() {
  return (
    <section className='max-w-3xl mx-auto px-6 py-12 text-center md:text-left'>
      <p className='text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed'>
        I have a passion for math, physics &amp; football. When not online, I
        like to <s>eat,</s> cook, game or listening to podcasts.
      </p>
      <hr className='my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10' />
      <h1 className='text-3xl font-semibold mb-6'>Some projects of mine</h1>
      <ProjectCarousel />
    </section>
  );
}
