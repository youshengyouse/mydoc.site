'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = Info;
exports.TypeTable = TypeTable;
var lucide_react_1 = require("lucide-react");
var link_1 = require("fumadocs-core/link");
var class_variance_authority_1 = require("class-variance-authority");
var cn_1 = require("@/utils/cn");
var popover_1 = require("@/components/ui/popover");
function Info(_a) {
    var children = _a.children;
    return (<popover_1.Popover>
      <popover_1.PopoverTrigger>
        <lucide_react_1.Info className="size-4"/>
      </popover_1.PopoverTrigger>
      <popover_1.PopoverContent className="prose max-h-[400px] min-w-[220px] max-w-[400px] overflow-auto text-sm prose-no-margin">
        {children}
      </popover_1.PopoverContent>
    </popover_1.Popover>);
}
var field = (0, class_variance_authority_1.cva)('inline-flex flex-row items-center gap-1');
var code = (0, class_variance_authority_1.cva)('rounded-md bg-fd-secondary p-1 text-fd-secondary-foreground', {
    variants: {
        color: {
            primary: 'bg-fd-primary/10 text-fd-primary',
            deprecated: 'line-through text-fd-primary/50',
        },
    },
});
function TypeTable(_a) {
    var type = _a.type;
    return (<div className="prose my-6 overflow-auto prose-no-margin">
      <table className="whitespace-nowrap text-sm text-fd-muted-foreground">
        <thead>
          <tr>
            <th className="w-[45%]">Prop</th>
            <th className="w-[30%]">Type</th>
            <th className="w-1/4">Default</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(type)
            .sort(function (a) { return (a[1].deprecated ? 1 : -1); })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<tr key={key}>
                <td>
                  <div className={field()}>
                    <code className={(0, cn_1.cn)(code({
                    color: value.deprecated ? 'deprecated' : 'primary',
                }))}>
                      {key}
                      {!value.required && '?'}
                    </code>
                    {value.description ? (<Info>{value.description}</Info>) : null}
                  </div>
                </td>
                <td>
                  <div className={field()}>
                    <code className={code()}>{value.type}</code>
                    {value.typeDescription ? (<Info>{value.typeDescription}</Info>) : null}
                    {value.typeDescriptionLink ? (<link_1.default href={value.typeDescriptionLink}>
                        <lucide_react_1.Info className="size-4"/>
                      </link_1.default>) : null}
                  </div>
                </td>
                <td>
                  {value.default ? (<code className={code()}>{value.default}</code>) : ('-')}
                </td>
              </tr>);
        })}
        </tbody>
      </table>
    </div>);
}
