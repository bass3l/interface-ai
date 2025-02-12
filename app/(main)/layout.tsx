import '@/styles/global.css';
import '@/styles/mdx.css';

import { BlocksNav } from '@/components/blocks-nav';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <div vaul-drawer-wrapper="">
        <div className="relative flex min-h-svh flex-col bg-background">
          <PageHeader>
            <PageHeaderHeading>
              Building Blocks for AI User Interfaces
            </PageHeaderHeading>
            <PageHeaderDescription>
              Clean, modern, and advanced AI building blocks. Copy and paste
              into your apps. Works with all React frameworks. Open Source. Free
              forever.
            </PageHeaderDescription>
          </PageHeader>
          <div id="blocks" className="border-grid scroll-mt-24 border-b">
            <div className="container-wrapper">
              <div className="container flex items-center py-4">
                <BlocksNav />
              </div>
            </div>
          </div>
          <div className="container-wrapper flex-1">{children}</div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
