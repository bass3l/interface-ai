import { BlockDisplay } from '@/components/block-display';

const FEATURED_BLOCKS = ['hello-world'];

export default function Home() {
  return (
    <div className="container-wrapper flex-1">
      {FEATURED_BLOCKS.map((block) => (
        <div
          key={block}
          className="border-grid container border-b py-8 first:pt-6 last:border-b-0 md:py-12"
        >
          <BlockDisplay name={block} />
        </div>
      ))}
    </div>
  );
}
