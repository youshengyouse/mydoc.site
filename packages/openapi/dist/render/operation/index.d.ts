import { type ReactElement } from 'react';
import type { MethodInformation, RenderContext } from '../../types.js';
import { type SampleGenerator } from '../../requests/_shared.js';
export interface CodeSample<T = unknown> {
    lang: string;
    label?: string;
    /**
     * either:
     * - code
     * - a function imported from a file with "use client" directive
     * - false (disabled)
     */
    source?: string | SampleGenerator<T> | false;
    /**
     * Pass extra context to client-side source generator
     */
    serverContext?: T;
}
export declare function Operation({ type, path, method, ctx, hasHead, headingLevel, }: {
    type?: 'webhook' | 'operation';
    path: string;
    method: MethodInformation;
    ctx: RenderContext;
    hasHead?: boolean;
    headingLevel?: number;
}): ReactElement;
//# sourceMappingURL=index.d.ts.map