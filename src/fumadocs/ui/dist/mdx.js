"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.createRelativeLink = void 0;
var link_1 = require("fumadocs-core/link");
var framework_1 = require("fumadocs-core/framework");
var card_1 = require("@/components/card");
var callout_1 = require("@/components/callout");
var heading_1 = require("@/components/heading");
var cn_1 = require("@/utils/cn");
var codeblock_1 = require("@/components/codeblock");
function Image(props) {
    return (<framework_1.Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px" {...props} src={props.src} className={(0, cn_1.cn)('rounded-lg', props.className)}/>);
}
function Table(props) {
    return (<div className="relative overflow-auto prose-no-margin my-6">
      <table {...props}/>
    </div>);
}
var defaultMdxComponents = {
    CodeBlockTab: codeblock_1.CodeBlockTab,
    CodeBlockTabs: codeblock_1.CodeBlockTabs,
    CodeBlockTabsList: codeblock_1.CodeBlockTabsList,
    CodeBlockTabsTrigger: codeblock_1.CodeBlockTabsTrigger,
    pre: function (props) { return (<codeblock_1.CodeBlock {...props}>
      <codeblock_1.Pre>{props.children}</codeblock_1.Pre>
    </codeblock_1.CodeBlock>); },
    Card: card_1.Card,
    Cards: card_1.Cards,
    a: link_1.default,
    img: Image,
    h1: function (props) { return (<heading_1.Heading as="h1" {...props}/>); },
    h2: function (props) { return (<heading_1.Heading as="h2" {...props}/>); },
    h3: function (props) { return (<heading_1.Heading as="h3" {...props}/>); },
    h4: function (props) { return (<heading_1.Heading as="h4" {...props}/>); },
    h5: function (props) { return (<heading_1.Heading as="h5" {...props}/>); },
    h6: function (props) { return (<heading_1.Heading as="h6" {...props}/>); },
    table: Table,
    Callout: callout_1.Callout,
};
exports.default = defaultMdxComponents;
var createRelativeLink = function () {
    throw new Error('`createRelativeLink` is only supported in Node.js environment');
};
exports.createRelativeLink = createRelativeLink;
