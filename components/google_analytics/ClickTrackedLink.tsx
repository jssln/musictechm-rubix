'use client';

import React, { JSX } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sendGAEvent } from "@next/third-parties/google";

type ClickTrackedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventParams?: Record<string, any>;
  delayMs?: number;
  openInNewTab?: boolean;
};

/**
 * A wrapper around Next's Link component that tracks clicks.
 * Delays navigation to ensure analytics events are sent.
 */
export default function ClickTrackedLink({
  href,
  children,
  eventName,
  eventParams = {},
  className = '',
  delayMs = 10,
  openInNewTab = false,
  ...rest
}: ClickTrackedLinkProps): JSX.Element {
  const router = useRouter();
  const isExternalLink = href.startsWith('http') || href.startsWith('//');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const isModifierKeyPressed = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    const willOpenInNewTab = isModifierKeyPressed || openInNewTab;

    if (process.env.NODE_ENV == "production") {
      if (!willOpenInNewTab) {
        e.preventDefault();
      }

      sendGAEvent('event', eventName, {
        ...eventParams,
      });

      if (!willOpenInNewTab) {
        setTimeout(() => {
          if (isExternalLink) {
            window.location.href = href;
          } else {
            router.push(href);
          }
        }, delayMs);
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const linkProps: any = {
    href,
    className,
    onClick: handleClick,
    ...rest
  };

  if (openInNewTab) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener';
  }

  return (
    <Link {...linkProps}>
      {children}
    </Link>
  );
};
