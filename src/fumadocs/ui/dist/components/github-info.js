"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubInfo = GithubInfo;
var cn_1 = require("@/utils/cn");
var lucide_react_1 = require("lucide-react");
function getRepoStarsAndForks(owner, repo, token) {
    return __awaiter(this, void 0, void 0, function () {
        var endpoint, headers, response, message, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = "https://api.github.com/repos/".concat(owner, "/").concat(repo);
                    headers = new Headers({
                        'Content-Type': 'application/json',
                    });
                    if (token)
                        headers.set('Authorization', "Bearer ".concat(token));
                    return [4 /*yield*/, fetch(endpoint, {
                            headers: headers,
                            next: {
                                revalidate: 60,
                            },
                        })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    message = _a.sent();
                    throw new Error("Failed to fetch repository data: ".concat(message));
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    return [2 /*return*/, {
                            stars: data.stargazers_count,
                            forks: data.forks_count,
                        }];
            }
        });
    });
}
function GithubInfo(_a) {
    return __awaiter(this, void 0, void 0, function () {
        var stars, humanizedStars;
        var repo = _a.repo, owner = _a.owner, token = _a.token, props = __rest(_a, ["repo", "owner", "token"]);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getRepoStarsAndForks(owner, repo, token)];
                case 1:
                    stars = (_b.sent()).stars;
                    humanizedStars = humanizeNumber(stars);
                    return [2 /*return*/, (<a href={"https://github.com/".concat(owner, "/").concat(repo)} rel="noreferrer noopener" target="_blank" {...props} className={(0, cn_1.cn)('flex flex-col gap-1.5 p-2 rounded-lg text-sm text-fd-foreground/80 transition-colors lg:flex-row lg:items-center hover:text-fd-accent-foreground hover:bg-fd-accent', props.className)}>
      <p className="flex items-center gap-2 truncate">
        <svg fill="currentColor" viewBox="0 0 24 24" className="size-3.5">
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        {owner}/{repo}
      </p>
      <p className="flex text-xs items-center gap-1 text-fd-muted-foreground">
        <lucide_react_1.Star className="size-3"/>
        {humanizedStars}
      </p>
    </a>)];
            }
        });
    });
}
/**
 * Converts a number to a human-readable string with K suffix for thousands
 * @example 1500 -> "1.5K", 1000000 -> "1000000"
 */
function humanizeNumber(num) {
    if (num < 1000) {
        return num.toString();
    }
    if (num < 100000) {
        // For numbers between 1,000 and 99,999, show with one decimal (e.g., 1.5K)
        var value = (num / 1000).toFixed(1);
        // Remove trailing .0 if present
        var formattedValue = value.endsWith('.0') ? value.slice(0, -2) : value;
        return "".concat(formattedValue, "K");
    }
    if (num < 1000000) {
        // For numbers between 10,000 and 999,999, show as whole K (e.g., 10K, 999K)
        return "".concat(Math.floor(num / 1000), "K");
    }
    // For 1,000,000 and above, just return the number
    return num.toString();
}
