/*!
Copyright (C) 2016-2018 Timofey Kachalov <sanex3339@yandex.ru>
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let arr1 = []
let arr2 = []
let downArr1 = []
let downArr2 = []
let arr1Str = randomStr(2)
let arr2Str = randomStr(2)
let downArr1Str = randomStr(2)
let downArr2Str = randomStr(2)
let oneJson = {}


const fs = require('fs');
const path = require('path');
let bh_obj1 = {}
let bh = 0
let bhNum = 0
let replaceStr = `${randomStr(2)}` //替换之后的前缀
let strLeft = 'xixixi_',
    strRight = '_hahahah',
    bhstr = randomStr(2) //要替换字符串的左边 跟 右边  bhstr: 数组里面的中间的字符串
let allStr = '' //输出的字符串

// json要输出的文件夹
let fileNames = [] //要打包的文件
const outputFileName = 'jsonList' //json要放的文件夹名
let fileNum = 0


// // 创建放json的目录
// fs.exists(outputFileName, function (exists) {
//     if (exists) {
//         console.log("该文件存在！");
//         removeDir(outputFileName, (res) => {
//             createDir()
//         })
//     } else {
//         // console.log("该文件不存在！");
//         createDir()
//     }
// });

// // 删除目录
// function removeDir(dir, callback) {
//     fs.readdir(dir, (err, files) => {
//         /**
//          * @desc 内部循环遍历使用的工具函数
//          * @param {Number} index 表示读取files的下标
//          */
//         function next(index) {
//             // 如果index 等于当前files的时候说明循环遍历已经完毕，可以删除dir，并且调用callback
//             if (index == files.length) return fs.rmdir(dir, callback)
//             // 如果文件还没有遍历结束的话，继续拼接新路径，使用fs.stat读取该路径
//             let newPath = path.join(dir, files[index])
//             // 读取文件，判断是文件还是文件目录

//             fs.stat(newPath, (err, stat) => {
//                 if (stat.isDirectory()) {
//                     // 因为我们这里是深度循环，也就是说遍历玩files[index]的目录以后，才会去遍历files[index+1]
//                     // 所以在这里直接继续调用rmdir，然后把循环下一个文件的调用放在当前调用的callback中
//                     rmdir(newPath, () => next(index + 1))
//                 } else {
//                     // 如果是文件，则直接删除该文件，然后在回调函数中调用遍历nextf方法，并且index+1传进去
//                     fs.unlink(newPath, () => next(index + 1))
//                 }
//             })
//         }
//         next(0)
//     })
// }

// // 创建目录
// function createDir() {
//     fs.mkdir(outputFileName, function (error) {
//         if (error) {
//             console.log(error);
//             return false;
//         }
//         console.log('创建目录成功');
//     })
// }

// 创建目录
function createDir(dir) {
    fs.mkdir(dir, function (error) {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('创建目录成功');
    })
}

// 获取随机字母字符串 long为字符串长度
function randomStr(long) {
    let ruleStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let finalStr = ''
    for (let i = 0; i < long; i++) {
        let num = Math.floor(Math.random() * ruleStr.length)
        finalStr += ruleStr[num]
    }
    return finalStr
}

// 10进制转换62进制
function fun10to64($num) {
    var $ret = '';
    var $to = 62;
    var $dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    do {
        $ret = $dict.charAt($num % $to) + $ret;
        $num = Math.floor($num / $to);
    } while ($num > 0)
    return $ret;
}

function getToday() {
    let myDate = new Date()
    let y = myDate.getFullYear()
    let m = myDate.getMonth() + 1
    let d = myDate.getDate()
    m = m < 10 ? `0${m}`: m
    d = d < 10 ? `0${d}`: d
    return `${y}${m}${d}`
}




require("source-map-support").install(),
    module.exports = function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var a = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(a.exports, a, a.exports, r),
                a.l = !0,
                a.exports
        }
        return r.m = e,
            r.c = t,
            r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            },
            r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            },
            r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var a in e) r.d(n, a,
                        function (t) {
                            return e[t]
                        }.bind(null, a));
                return n
            },
            r.n = function (e) {
                var t = e && e.__esModule ?
                    function () {
                        return e.
                        default
                    } :
                    function () {
                        return e
                    };
                return r.d(t, "a", t),
                    t
            },
            r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            r.p = "",
            r(r.s = 202)
    }([function (e, t) {
            e.exports = require("@babel/runtime/helpers/interopRequireDefault")
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/classCallCheck")
        },
        function (e, t) {
            e.exports = require("inversify")
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/createClass")
        },
        function (e, t) {
            e.exports = require("tslib")
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.Factory__ICalleeDataExtractor = "Factory<ICalleeDataExtractor>",
                        e.Factory__IControlFlowCustomNode = "Factory<IControlFlowCustomNode>",
                        e.Factory__IControlFlowReplacer = "Factory<IControlFlowReplacer>",
                        e.Factory__ICustomNode = "Factory<ICustomNode>",
                        e.Factory__ICustomNodeGroup = "Factory<ICustomNodeGroup>",
                        e.Factory__IDeadCodeInjectionCustomNode = "Factory<IDeadCodeInjectionCustomNode>",
                        e.Factory__IIdentifierNamesGenerator = "Factory<IIdentifierNamesGenerator>",
                        e.Factory__IIdentifierObfuscatingReplacer = "Factory<IIdentifierObfuscatingReplacer>",
                        e.Factory__INodeGuard = "Factory<INodeGuard>",
                        e.Factory__INodeTransformer = "Factory<INodeTransformer[]>",
                        e.Factory__IObfuscatedCode = "Factory<IObfuscatedCode>",
                        e.Factory__IObfuscatingReplacer = "Factory<IObfuscatingReplacer>",
                        e.Factory__IPropertiesExtractor = "Factory<IPropertiesExtractor>",
                        e.Factory__TControlFlowStorage = "Factory<TControlFlowStorage>",
                        e.IArrayUtils = "IArrayUtils",
                        e.ICalleeDataExtractor = "ICalleeDataExtractor",
                        e.ICryptUtils = "ICryptUtils",
                        e.ICustomNode = "ICustomNode",
                        e.ICustomNodeGroup = "ICustomNodeGroup",
                        e.IControlFlowReplacer = "IControlFlowReplacer",
                        e.IEscapeSequenceEncoder = "IEscapeSequenceEncoder",
                        e.IIdentifierNamesGenerator = "IIdentifierNamesGenerator",
                        e.IIdentifierObfuscatingReplacer = "IIdentifierObfuscatingReplacer",
                        e.IJavaScriptObfuscator = "IJavaScriptObfuscator",
                        e.ILogger = "ILogger",
                        e.INodeGuard = "INodeGuard",
                        e.INodeTransformer = "INodeTransformer",
                        e.IObfuscationEventEmitter = "IObfuscationEventEmitter",
                        e.IObfuscatedCode = "IObfuscatedCode",
                        e.IOptions = "IOptions",
                        e.IOptionsNormalizer = "IOptionsNormalizer",
                        e.IObfuscatingReplacer = "IObfuscatingReplacer",
                        e.IPropertiesExtractor = "IPropertiesExtractor",
                        e.IRandomGenerator = "IRandomGenerator",
                        e.ISourceCode = "ISourceCode",
                        e.ISourceMapCorrector = "ISourceMapCorrector",
                        e.IStackTraceAnalyzer = "IStackTraceAnalyzer",
                        e.ITransformersRunner = "ITransformersRunner",
                        e.Newable__ICustomNode = "Newable<ICustomNode>",
                        e.Newable__TControlFlowStorage = "Newable<TControlFlowStorage>",
                        e.TCustomNodeGroupStorage = "TCustomNodeGroupStorage",
                        e.TInputOptions = "TInputOptions",
                        e.TStringArrayStorage = "TStringArrayStorage"
                }(t.ServiceIdentifiers || (t.ServiceIdentifiers = {}))
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/possibleConstructorReturn")
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/getPrototypeOf")
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/inherits")
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(19),
                s = function () {
                    function e() {
                        (0, a.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                                key: "isArrayPatternNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ArrayPattern
                                }
                            },
                            {
                                key: "isArrowFunctionExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ArrowFunctionExpression
                                }
                            },
                            {
                                key: "isAssignmentPatternNode",
                                value: function (e) {
                                    return e.type === i.NodeType.AssignmentPattern
                                }
                            },
                            {
                                key: "isAwaitExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.AwaitExpression
                                }
                            },
                            {
                                key: "isBlockStatementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.BlockStatement
                                }
                            },
                            {
                                key: "isBreakStatementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.BreakStatement
                                }
                            },
                            {
                                key: "isCallExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.CallExpression
                                }
                            },
                            {
                                key: "isCatchClauseNode",
                                value: function (e) {
                                    return e.type === i.NodeType.CatchClause
                                }
                            },
                            {
                                key: "isClassDeclarationNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ClassDeclaration
                                }
                            },
                            {
                                key: "isContinueStatementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ContinueStatement
                                }
                            },
                            {
                                key: "isExportNamedDeclarationNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ExportNamedDeclaration
                                }
                            },
                            {
                                key: "isExpressionStatementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ExpressionStatement
                                }
                            },
                            {
                                key: "isFunctionNode",
                                value: function (t) {
                                    return e.isFunctionDeclarationNode(t) || e.isFunctionExpressionNode(t) || e.isArrowFunctionExpressionNode(t)
                                }
                            },
                            {
                                key: "isFunctionDeclarationNode",
                                value: function (e) {
                                    return e.type === i.NodeType.FunctionDeclaration
                                }
                            },
                            {
                                key: "isFunctionExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.FunctionExpression
                                }
                            },
                            {
                                key: "isIdentifierNode",
                                value: function (e) {
                                    return e.type === i.NodeType.Identifier
                                }
                            },
                            {
                                key: "isImportDeclarationNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ImportDeclaration
                                }
                            },
                            {
                                key: "isImportSpecifierNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ImportSpecifier
                                }
                            },
                            {
                                key: "isLabelIdentifierNode",
                                value: function (t, r) {
                                    var n = e.isLabeledStatementNode(r) && r.label === t,
                                        a = e.isContinueStatementNode(r) && r.label === t,
                                        o = e.isBreakStatementNode(r) && r.label === t;
                                    return n || a || o
                                }
                            },
                            {
                                key: "isLabeledStatementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.LabeledStatement
                                }
                            },
                            {
                                key: "isLiteralNode",
                                value: function (e) {
                                    return e.type === i.NodeType.Literal
                                }
                            },
                            {
                                key: "isMemberExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.MemberExpression
                                }
                            },
                            {
                                key: "isMethodDefinitionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.MethodDefinition
                                }
                            },
                            {
                                key: "isNode",
                                value: function (e) {
                                    return e && void 0 !== !e.type
                                }
                            },
                            {
                                key: "isNodeWithLexicalScope",
                                value: function (t) {
                                    return e.isProgramNode(t) || e.isFunctionNode(t)
                                }
                            },
                            {
                                key: "isNodeWithBlockLexicalScope",
                                value: function (t) {
                                    return e.isNodeWithLexicalScope(t) || e.isBlockStatementNode(t)
                                }
                            },
                            {
                                key: "isNodeWithLexicalScopeStatements",
                                value: function (t, r) {
                                    return e.isProgramNode(t) || e.isBlockStatementNode(t) && e.nodesWithLexicalStatements.includes(r.type)
                                }
                            },
                            {
                                key: "isNodeWithStatements",
                                value: function (t) {
                                    return e.isProgramNode(t) || e.isBlockStatementNode(t) || e.isSwitchCaseNode(t)
                                }
                            },
                            {
                                key: "isNodeWithComments",
                                value: function (e) {
                                    return Boolean(e.leadingComments) || Boolean(e.trailingComments)
                                }
                            },
                            {
                                key: "isObjectPatternNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ObjectPattern
                                }
                            },
                            {
                                key: "isObjectExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ObjectExpression
                                }
                            },
                            {
                                key: "isProgramNode",
                                value: function (e) {
                                    return e.type === i.NodeType.Program
                                }
                            },
                            {
                                key: "isPropertyNode",
                                value: function (e) {
                                    return e.type === i.NodeType.Property
                                }
                            },
                            {
                                key: "parentNodeIsPropertyNode",
                                value: function (t, r) {
                                    return e.isPropertyNode(r) && !r.computed && r.key === t
                                }
                            },
                            {
                                key: "parentNodeIsMemberExpressionNode",
                                value: function (t, r) {
                                    return e.isMemberExpressionNode(r) && !r.computed && r.property === t
                                }
                            },
                            {
                                key: "parentNodeIsMethodDefinitionNode",
                                value: function (t, r) {
                                    return e.isMethodDefinitionNode(r) && !r.computed
                                }
                            },
                            {
                                key: "isReplaceableIdentifierNode",
                                value: function (t, r) {
                                    return e.isIdentifierNode(t) && !e.parentNodeIsPropertyNode(t, r) && !e.parentNodeIsMemberExpressionNode(t, r) && !e.parentNodeIsMethodDefinitionNode(t, r) && !e.isLabelIdentifierNode(t, r)
                                }
                            },
                            {
                                key: "isRestElementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.RestElement
                                }
                            },
                            {
                                key: "isReturnStatementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.ReturnStatement
                                }
                            },
                            {
                                key: "isSuperNode",
                                value: function (e) {
                                    return e.type === i.NodeType.Super
                                }
                            },
                            {
                                key: "isSwitchCaseNode",
                                value: function (e) {
                                    return e.type === i.NodeType.SwitchCase
                                }
                            },
                            {
                                key: "isTaggedTemplateExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.TaggedTemplateExpression
                                }
                            },
                            {
                                key: "isTemplateLiteralNode",
                                value: function (e) {
                                    return e.type === i.NodeType.TemplateLiteral
                                }
                            },
                            {
                                key: "isUnaryExpressionNode",
                                value: function (e) {
                                    return e.type === i.NodeType.UnaryExpression
                                }
                            },
                            {
                                key: "isUseStrictOperator",
                                value: function (e) {
                                    return e.type === i.NodeType.ExpressionStatement && "use strict" === e.directive
                                }
                            },
                            {
                                key: "isVariableDeclarationNode",
                                value: function (e) {
                                    return e.type === i.NodeType.VariableDeclaration
                                }
                            },
                            {
                                key: "isVariableDeclaratorNode",
                                value: function (e) {
                                    return e.type === i.NodeType.VariableDeclarator
                                }
                            },
                            {
                                key: "isWhileStatementNode",
                                value: function (e) {
                                    return e.type === i.NodeType.WhileStatement
                                }
                            }
                        ]),
                        e
                }();
            t.NodeGuards = s,
                s.nodesWithLexicalStatements = [i.NodeType.ArrowFunctionExpression, i.NodeType.FunctionDeclaration, i.NodeType.FunctionExpression, i.NodeType.MethodDefinition]
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                    configurable: !0,
                    enumerable: !0
                },
                a = "_initialized",
                o = "_initializablePropertiesSet",
                i = "_wrappedMethodsSet",
                s = "constructor";

            function c(e, t, r) {
                Reflect.hasMetadata(e, r) || Reflect.defineMetadata(e, t, r)
            }
            t.initializable = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "initialize",
                    t = Object.keys(this)[0];
                return function (r, d) {
                    var u = r[e];
                    if (!u || "function" != typeof u) throw new Error("`".concat(e, "` method with initialization logic not ") + "found. `@".concat(t, "` decorator requires `").concat(e, "` method"));
                    return c(a, !1, r),
                        c(o, new Set, r),
                        c(i, new Set, r),
                        function (e, t) {
                            var r = Object.getOwnPropertyNames(e),
                                c = [t, s];
                            r.forEach((function (r) {
                                var s = Reflect.getMetadata(o, e),
                                    d = Reflect.getMetadata(i, e);
                                if (!(c.includes(r) || s.has(r) || d.has(r)) && "function" == typeof e[r]) {
                                    var u = Object.getOwnPropertyDescriptor(e, r) || n,
                                        l = u.value;
                                    Object.defineProperty(e, r, Object.assign(Object.assign({},
                                            u), {
                                            value: function () {
                                                if (!Reflect.getMetadata(a, this)) throw new Error("Class should be initialized with `".concat(t, "()` method"));
                                                return l.apply(this, arguments)
                                            }
                                        })),
                                        d.add(r)
                                }
                            }))
                        }(r, e),
                        function (e, t, r) {
                            var o = Object.getOwnPropertyDescriptor(e, t) || n,
                                i = o.value;
                            Object.defineProperty(e, t, Object.assign(Object.assign({},
                                o), {
                                value: function () {
                                    Reflect.defineMetadata(a, !0, this);
                                    var e = i.apply(this, arguments);
                                    return this[r],
                                        e
                                }
                            }))
                        }(r, e, d),
                        function (e, t) {
                            Reflect.getMetadata(o, e).add(t);
                            var r = "_".concat(t.toString()),
                                a = Object.getOwnPropertyDescriptor(e, r) || n;
                            return Object.defineProperty(e, t, Object.assign(Object.assign({},
                                    a), {
                                    get: function () {
                                        if (void 0 === this[r]) throw new Error("Property `".concat(t.toString(), "` is not initialized! Initialize it first!"));
                                        return this[r]
                                    },
                                    set: function (e) {
                                        this[r] = e
                                    }
                                })),
                                a
                        }(r, d)
                }
            }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(50)),
                o = n(r(1)),
                i = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = s.__importStar(r(44)),
                d = s.__importStar(r(51)),
                u = s.__importStar(r(16)),
                l = r(9),
                f = r(17),
                p = function () {
                    function e() {
                        (0, o.default)(this, e)
                    }
                    return (0, i.default)(e, null, [{
                                key: "addXVerbatimPropertyTo",
                                value: function (e) {
                                    return e["x-verbatim-property"] = {
                                            content: e.raw,
                                            precedence: c.Precedence.Primary
                                        },
                                        e
                                }
                            },
                            {
                                key: "clone",
                                value: function (t) {
                                    return e.parentizeAst(e.cloneRecursive(t))
                                }
                            },
                            {
                                key: "convertCodeToStructure",
                                value: function (t) {
                                    var r = d.parse(t, {
                                        sourceType: "script"
                                    });
                                    return u.replace(r, {
                                            enter: function (t, r) {
                                                return e.parentizeNode(t, r),
                                                    l.NodeGuards.isLiteralNode(t) && e.addXVerbatimPropertyTo(t),
                                                    f.NodeMetadata.set(t, {
                                                        ignoredNode: !1
                                                    }),
                                                    t
                                            }
                                        }),
                                        r.body
                                }
                            },
                            {
                                key: "convertStructureToCode",
                                value: function (e) {
                                    return e.reduce((function (e, t) {
                                        return e + c.generate(t, {
                                            sourceMapWithCode: !0
                                        }).code
                                    }), "")
                                }
                            },
                            {
                                key: "getUnaryExpressionArgumentNode",
                                value: function (t) {
                                    return l.NodeGuards.isUnaryExpressionNode(t.argument) ? e.getUnaryExpressionArgumentNode(t.argument) : t.argument
                                }
                            },
                            {
                                key: "parentizeAst",
                                value: function (t) {
                                    return u.replace(t, {
                                            enter: e.parentizeNode
                                        }),
                                        t
                                }
                            },
                            {
                                key: "parentizeNode",
                                value: function (e, t) {
                                    return e.parentNode = t || e,
                                        e
                                }
                            },
                            {
                                key: "cloneRecursive",
                                value: function (t) {
                                    if (null === t) return t;
                                    var r = {};
                                    return Object.keys(t).forEach((function (n) {
                                            if ("parentNode" !== n) {
                                                var o, i = t[n];
                                                o = null === i || i instanceof RegExp ? i : Array.isArray(i) ? i.map(e.cloneRecursive) : "object" === (0, a.default)(i) ? e.cloneRecursive(i) : i,
                                                    r[n] = o
                                            }
                                        })),
                                        r
                                }
                            }
                        ]),
                        e
                }();
            t.NodeUtils = p
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.Initializing = "Initializing",
                        e.Preparing = "Preparing",
                        e.DeadCodeInjection = "DeadCodeInjection",
                        e.ControlFlowFlattening = "ControlFlowFlattening",
                        e.Converting = "Converting",
                        e.Obfuscating = "Obfuscating",
                        e.Finalizing = "Finalizing"
                }(t.TransformationStage || (t.TransformationStage = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0)(r(1));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(4),
                o = r(2),
                i = r(5),
                s = function e(t, r) {
                    (0, n.default)(this, e),
                    this.randomGenerator = t,
                        this.options = r
                };
            s = a.__decorate([o.injectable(), a.__param(0, o.inject(i.ServiceIdentifiers.IRandomGenerator)), a.__param(1, o.inject(i.ServiceIdentifiers.IOptions)), a.__metadata("design:paramtypes", [Object, Object])], s),
                t.AbstractNodeTransformer = s
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4).__importStar(r(44)),
                s = r(19),
                c = function () {
                    function e() {
                        (0, a.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                                key: "programNode",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                    return {
                                        type: s.NodeType.Program,
                                        body: e,
                                        sourceType: "script",
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "arrayExpressionNode",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                    return {
                                        type: s.NodeType.ArrayExpression,
                                        elements: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "assignmentExpressionNode",
                                value: function (e, t, r) {
                                    return {
                                        type: s.NodeType.AssignmentExpression,
                                        operator: e,
                                        left: t,
                                        right: r,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "binaryExpressionNode",
                                value: function (e, t, r) {
                                    return {
                                        type: s.NodeType.BinaryExpression,
                                        operator: e,
                                        left: t,
                                        right: r,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "blockStatementNode",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                    return {
                                        type: s.NodeType.BlockStatement,
                                        body: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "breakStatement",
                                value: function (e) {
                                    return {
                                        type: s.NodeType.BreakStatement,
                                        label: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "callExpressionNode",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                                    return {
                                        type: s.NodeType.CallExpression,
                                        callee: e,
                                        arguments: t,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "continueStatement",
                                value: function (e) {
                                    return {
                                        type: s.NodeType.ContinueStatement,
                                        label: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "expressionStatementNode",
                                value: function (e) {
                                    return {
                                        type: s.NodeType.ExpressionStatement,
                                        expression: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "functionDeclarationNode",
                                value: function (t, r, n) {
                                    return {
                                        type: s.NodeType.FunctionDeclaration,
                                        id: e.identifierNode(t),
                                        params: r,
                                        body: n,
                                        generator: !1,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "functionExpressionNode",
                                value: function (e, t) {
                                    return {
                                        type: s.NodeType.FunctionExpression,
                                        params: e,
                                        body: t,
                                        generator: !1,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "ifStatementNode",
                                value: function (e, t, r) {
                                    return Object.assign(Object.assign({
                                            type: s.NodeType.IfStatement,
                                            test: e,
                                            consequent: t
                                        },
                                        r && {
                                            alternate: r
                                        }), {
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    })
                                }
                            },
                            {
                                key: "identifierNode",
                                value: function (e) {
                                    return {
                                        type: s.NodeType.Identifier,
                                        name: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "literalNode",
                                value: function (e, t) {
                                    return t = void 0 !== t ? t : "'".concat(e, "'"), {
                                        type: s.NodeType.Literal,
                                        value: e,
                                        raw: t,
                                        "x-verbatim-property": {
                                            content: t,
                                            precedence: i.Precedence.Primary
                                        },
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "logicalExpressionNode",
                                value: function (e, t, r) {
                                    return {
                                        type: s.NodeType.LogicalExpression,
                                        operator: e,
                                        left: t,
                                        right: r,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "memberExpressionNode",
                                value: function (e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    return {
                                        type: s.NodeType.MemberExpression,
                                        computed: r,
                                        object: e,
                                        property: t,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "methodDefinitionNode",
                                value: function (e, t, r, n) {
                                    return {
                                        type: s.NodeType.MethodDefinition,
                                        key: e,
                                        value: t,
                                        kind: r,
                                        computed: n,
                                        static: !1,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "objectExpressionNode",
                                value: function (e) {
                                    return {
                                        type: s.NodeType.ObjectExpression,
                                        properties: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "propertyNode",
                                value: function (e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    return {
                                        type: s.NodeType.Property,
                                        key: e,
                                        value: t,
                                        kind: "init",
                                        method: !1,
                                        shorthand: !1,
                                        computed: r,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "returnStatementNode",
                                value: function (e) {
                                    return {
                                        type: s.NodeType.ReturnStatement,
                                        argument: e,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "switchStatementNode",
                                value: function (e, t) {
                                    return {
                                        type: s.NodeType.SwitchStatement,
                                        discriminant: e,
                                        cases: t,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "switchCaseNode",
                                value: function (e, t) {
                                    return {
                                        type: s.NodeType.SwitchCase,
                                        test: e,
                                        consequent: t,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "unaryExpressionNode",
                                value: function (e, t) {
                                    var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                    return {
                                        type: s.NodeType.UnaryExpression,
                                        operator: e,
                                        argument: t,
                                        prefix: r,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "updateExpressionNode",
                                value: function (e, t) {
                                    return {
                                        type: s.NodeType.UpdateExpression,
                                        operator: e,
                                        argument: t,
                                        prefix: !1,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "variableDeclarationNode",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "var";
                                    return {
                                        type: s.NodeType.VariableDeclaration,
                                        declarations: e,
                                        kind: t,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "variableDeclaratorNode",
                                value: function (e, t) {
                                    return {
                                        type: s.NodeType.VariableDeclarator,
                                        id: e,
                                        init: t,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            },
                            {
                                key: "whileStatementNode",
                                value: function (e, t) {
                                    return {
                                        type: s.NodeType.WhileStatement,
                                        test: e,
                                        body: t,
                                        metadata: {
                                            ignoredNode: !1
                                        }
                                    }
                                }
                            }
                        ]),
                        e
                }();
            t.NodeFactory = c
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = r(95),
                l = r(96),
                f = n = function () {
                    function e(t, r, n) {
                        (0, o.default)(this, e),
                        this.cachedNode = null,
                            this.identifierNamesGenerator = t(n),
                            this.randomGenerator = r,
                            this.options = n
                    }
                    return (0, i.default)(e, [{
                                key: "getNode",
                                value: function () {
                                    return this.cachedNode || (this.cachedNode = this.getNodeStructure()),
                                        this.cachedNode
                                }
                            },
                            {
                                key: "getGlobalVariableTemplate",
                                value: function () {
                                    return this.randomGenerator.getRandomGenerator().pickone(n.globalVariableTemplateFunctions)
                                }
                            }
                        ]),
                        e
                }();
            f.globalVariableTemplateFunctions = [u.GlobalVariableTemplate1(), l.GlobalVariableTemplate2()],
                f = n = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), s.__param(1, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s.__param(2, c.inject(d.ServiceIdentifiers.IOptions)), s.__metadata("design:paramtypes", [Function, Object, Object])], f),
                t.AbstractCustomNode = f
        },
        function (e, t) {
            e.exports = require("estraverse")
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                function e() {
                    (0, a.default)(this, e)
                }
                return (0, o.default)(e, null, [{
                            key: "set",
                            value: function (e, t) {
                                e.metadata = Object.assign(e.metadata || {},
                                    t)
                            }
                        },
                        {
                            key: "get",
                            value: function (e, t) {
                                return void 0 !== e.metadata ? e.metadata[t] : void 0
                            }
                        },
                        {
                            key: "isIgnoredNode",
                            value: function (t) {
                                return !0 === e.get(t, "ignoredNode")
                            }
                        },
                        {
                            key: "isRenamedIdentifier",
                            value: function (t) {
                                return !0 === e.get(t, "renamedIdentifier")
                            }
                        },
                        {
                            key: "isReplacedLiteral",
                            value: function (t) {
                                return !0 === e.get(t, "replacedLiteral")
                            }
                        }
                    ]),
                    e
            }();
            t.NodeMetadata = i
        },
        function (e, t) {
            e.exports = require("string-template")
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.ArrayExpression = "ArrayExpression",
                        e.ArrayPattern = "ArrayPattern",
                        e.ArrowFunctionExpression = "ArrowFunctionExpression",
                        e.AssignmentExpression = "AssignmentExpression",
                        e.AssignmentPattern = "AssignmentPattern",
                        e.AwaitExpression = "AwaitExpression",
                        e.BinaryExpression = "BinaryExpression",
                        e.BlockStatement = "BlockStatement",
                        e.BreakStatement = "BreakStatement",
                        e.CallExpression = "CallExpression",
                        e.CatchClause = "CatchClause",
                        e.ClassDeclaration = "ClassDeclaration",
                        e.ContinueStatement = "ContinueStatement",
                        e.ExportNamedDeclaration = "ExportNamedDeclaration",
                        e.ExpressionStatement = "ExpressionStatement",
                        e.FunctionDeclaration = "FunctionDeclaration",
                        e.FunctionExpression = "FunctionExpression",
                        e.Identifier = "Identifier",
                        e.IfStatement = "IfStatement",
                        e.ImportDeclaration = "ImportDeclaration",
                        e.ImportDefaultSpecifier = "ImportDefaultSpecifier",
                        e.ImportNamespaceSpecifier = "ImportNamespaceSpecifier",
                        e.ImportSpecifier = "ImportSpecifier",
                        e.LabeledStatement = "LabeledStatement",
                        e.Literal = "Literal",
                        e.LogicalExpression = "LogicalExpression",
                        e.MemberExpression = "MemberExpression",
                        e.MethodDefinition = "MethodDefinition",
                        e.ObjectExpression = "ObjectExpression",
                        e.ObjectPattern = "ObjectPattern",
                        e.Program = "Program",
                        e.Property = "Property",
                        e.RestElement = "RestElement",
                        e.ReturnStatement = "ReturnStatement",
                        e.Super = "Super",
                        e.SwitchCase = "SwitchCase",
                        e.SwitchStatement = "SwitchStatement",
                        e.TaggedTemplateExpression = "TaggedTemplateExpression",
                        e.TemplateLiteral = "TemplateLiteral",
                        e.TryStatement = "TryStatement",
                        e.UnaryExpression = "UnaryExpression",
                        e.UpdateExpression = "UpdateExpression",
                        e.VariableDeclaration = "VariableDeclaration",
                        e.VariableDeclarator = "VariableDeclarator",
                        e.WhileStatement = "WhileStatement"
                }(t.NodeType || (t.NodeType = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.BaseIdentifierObfuscatingReplacer = "BaseIdentifierObfuscatingReplacer"
                }(t.IdentifierObfuscatingReplacer || (t.IdentifierObfuscatingReplacer = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(66)),
                o = n(r(1)),
                i = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(2),
                c = r(5),
                d = r(67),
                u = r(72),
                l = r(80),
                f = r(88),
                p = r(134),
                m = r(135),
                g = r(138),
                N = r(139),
                v = r(153),
                y = r(169),
                _ = r(179),
                h = r(184),
                b = r(190),
                S = r(64),
                I = r(193),
                C = r(195),
                O = r(196),
                F = r(197),
                j = function () {
                    function e() {
                        (0, o.default)(this, e),
                        this.container = new s.Container
                    }
                    return (0, i.default)(e, [{
                                key: "get",
                                value: function (e) {
                                    return this.container.get(e)
                                }
                            },
                            {
                                key: "getNamed",
                                value: function (e, t) {
                                    return this.container.getNamed(e, t)
                                }
                            },
                            {
                                key: "load",
                                value: function (e, t, r) {
                                    this.container.bind(c.ServiceIdentifiers.ISourceCode).toDynamicValue((function () {
                                            return new O.SourceCode(e, t)
                                        })).inSingletonScope(),
                                        this.container.bind(c.ServiceIdentifiers.TInputOptions).toDynamicValue((function () {
                                            return r
                                        })).inSingletonScope(),
                                        this.container.bind(c.ServiceIdentifiers.ILogger).to(S.Logger).inSingletonScope(),
                                        this.container.bind(c.ServiceIdentifiers.IJavaScriptObfuscator).to(b.JavaScriptObfuscator).inSingletonScope(),
                                        this.container.bind(c.ServiceIdentifiers.ITransformersRunner).to(F.TransformersRunner).inSingletonScope(),
                                        this.container.bind(c.ServiceIdentifiers.IObfuscatedCode).to(C.ObfuscatedCode),
                                        this.container.bind(c.ServiceIdentifiers.Factory__IObfuscatedCode).toFactory((function (e) {
                                            return function (t, r) {
                                                var n = e.container.get(c.ServiceIdentifiers.IObfuscatedCode);
                                                return n.initialize(t, r),
                                                    n
                                            }
                                        })),
                                        this.container.bind(c.ServiceIdentifiers.IObfuscationEventEmitter).to(I.ObfuscationEventEmitter).inSingletonScope(),
                                        this.container.load(d.analyzersModule),
                                        this.container.load(u.controlFlowTransformersModule),
                                        this.container.load(l.convertingTransformersModule),
                                        this.container.load(f.customNodesModule),
                                        this.container.load(p.finalizingTransformersModule),
                                        this.container.load(m.generatorsModule),
                                        this.container.load(g.nodeTransformersModule),
                                        this.container.load(N.obfuscatingTransformersModule),
                                        this.container.load(v.optionsModule),
                                        this.container.load(y.preparingTransformersModule),
                                        this.container.load(_.storagesModule),
                                        this.container.load(h.utilsModule)
                                }
                            },
                            {
                                key: "unload",
                                value: function () {
                                    this.container.unbindAll()
                                }
                            }
                        ], [{
                                key: "getFactory",
                                value: function (e) {
                                    return function (t) {
                                        return function (r) {
                                            return t.container.getNamed(e, r)
                                        }
                                    }
                                }
                            },
                            {
                                key: "getCacheFactory",
                                value: function (e) {
                                    return function (t) {
                                        var r = new Map;
                                        return function (n) {
                                            if (r.has(n)) return r.get(n);
                                            var a = t.container.getNamed(e, n);
                                            return r.set(n, a),
                                                a
                                        }
                                    }
                                }
                            },
                            {
                                key: "getConstructorFactory",
                                value: function (e) {
                                    for (var t = arguments.length,
                                            r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                    return function (t) {
                                        var n = new Map,
                                            o = [];
                                        return function (i) {
                                            if (r.forEach((function (e, r) {
                                                    o[r] || (o[r] = t.container.get(e))
                                                })), n.has(i)) return (0, a.default)(n.get(i), o);
                                            var s = t.container.getNamed(e, i);
                                            return n.set(i, s),
                                                (0, a.default)(s, o)
                                        }
                                    }
                                }
                            }
                        ]),
                        e
                }();
            t.InversifyContainerFacade = j
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.BinaryExpressionFunctionNode = "BinaryExpressionFunctionNode",
                        e.BlockStatementControlFlowFlatteningNode = "BlockStatementControlFlowFlatteningNode",
                        e.CallExpressionControlFlowStorageCallNode = "CallExpressionControlFlowStorageCallNode",
                        e.CallExpressionFunctionNode = "CallExpressionFunctionNode",
                        e.ControlFlowStorageNode = "ControlFlowStorageNode",
                        e.ExpressionWithOperatorControlFlowStorageCallNode = "ExpressionWithOperatorControlFlowStorageCallNode",
                        e.LogicalExpressionFunctionNode = "LogicalExpressionFunctionNode",
                        e.StringLiteralControlFlowStorageCallNode = "StringLiteralControlFlowStorageCallNode",
                        e.StringLiteralNode = "StringLiteralNode"
                }(t.ControlFlowCustomNode || (t.ControlFlowCustomNode = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.Browser = "browser",
                        e.BrowserNoEval = "browser-no-eval",
                        e.Node = "node"
                }(t.ObfuscationTarget || (t.ObfuscationTarget = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9),
                s = function () {
                    function e() {
                        (0, a.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                                key: "getParentNodeWithStatements",
                                value: function (t) {
                                    return e.getParentNodesWithStatementsRecursive(t, 1)[0]
                                }
                            },
                            {
                                key: "getParentNodesWithStatements",
                                value: function (t) {
                                    return e.getParentNodesWithStatementsRecursive(t)
                                }
                            },
                            {
                                key: "getNextSiblingStatement",
                                value: function (t) {
                                    return e.getSiblingStatementByOffset(t, 1)
                                }
                            },
                            {
                                key: "getPreviousSiblingStatement",
                                value: function (t) {
                                    return e.getSiblingStatementByOffset(t, -1)
                                }
                            },
                            {
                                key: "getRootStatementOfNode",
                                value: function (t) {
                                    if (i.NodeGuards.isProgramNode(t)) throw new Error("Unable to find root statement for `Program` node");
                                    var r = t.parentNode;
                                    if (!r) throw new ReferenceError("`parentNode` property of given node is `undefined`");
                                    return i.NodeGuards.isNodeWithStatements(r) ? t : e.getRootStatementOfNode(r)
                                }
                            },
                            {
                                key: "getScopeOfNode",
                                value: function (t) {
                                    var r = t.parentNode;
                                    if (!r) throw new ReferenceError("`parentNode` property of given node is `undefined`");
                                    return i.NodeGuards.isNodeWithStatements(r) ? r : e.getScopeOfNode(r)
                                }
                            },
                            {
                                key: "getParentNodesWithStatementsRecursive",
                                value: function (t) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                                    if (n.length >= r) return n;
                                    var o = t.parentNode;
                                    if (!o) throw new ReferenceError("`parentNode` property of given node is `undefined`");
                                    return (i.NodeGuards.isProgramNode(t) || i.NodeGuards.isNodeWithLexicalScopeStatements(t, o) && a > 0) && n.push(t),
                                        t !== o ? e.getParentNodesWithStatementsRecursive(o, r, n, ++a) : n
                                }
                            },
                            {
                                key: "getSiblingStatementByOffset",
                                value: function (t, r) {
                                    var n = e.getScopeOfNode(t),
                                        a = i.NodeGuards.isSwitchCaseNode(n) ? n.consequent : n.body,
                                        o = a.indexOf(t);
                                    return a[o + r] || null
                                }
                            }
                        ]),
                        e
                }();
            t.NodeStatementUtils = s
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(28)),
                o = n(r(1)),
                i = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(9),
                c = function () {
                    function e() {
                        (0, o.default)(this, e)
                    }
                    return (0, i.default)(e, null, [{
                                key: "append",
                                value: function (t, r) {
                                    r = e.parentizeScopeStatementsBeforeAppend(t, r),
                                        e.setScopeStatements(t, [].concat((0, a.default)(e.getScopeStatements(t)), (0, a.default)(r)))
                                }
                            },
                            {
                                key: "appendToOptimalBlockScope",
                                value: function (t, r, n) {
                                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        o = t.length ? e.getOptimalBlockScope(t, a) : r;
                                    e.prepend(o, n)
                                }
                            },
                            {
                                key: "getOptimalBlockScope",
                                value: function (t, r) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                                        a = t[r];
                                    if (n <= 0) throw new Error("Invalid `deep` argument value. Value should be bigger then 0.");
                                    return n > 1 && a.stackTrace.length ? e.getOptimalBlockScope(a.stackTrace, 0, --n) : a.callee
                                }
                            },
                            {
                                key: "insertAfter",
                                value: function (t, r, n) {
                                    var a = e.getScopeStatements(t).indexOf(n);
                                    e.insertAtIndex(t, r, a + 1)
                                }
                            },
                            {
                                key: "insertAtIndex",
                                value: function (t, r, n) {
                                    r = e.parentizeScopeStatementsBeforeAppend(t, r),
                                        e.setScopeStatements(t, [].concat((0, a.default)(e.getScopeStatements(t).slice(0, n)), (0, a.default)(r), (0, a.default)(e.getScopeStatements(t).slice(n))))
                                }
                            },
                            {
                                key: "prepend",
                                value: function (t, r) {
                                    r = e.parentizeScopeStatementsBeforeAppend(t, r),
                                        e.setScopeStatements(t, [].concat((0, a.default)(r), (0, a.default)(e.getScopeStatements(t))))
                                }
                            },
                            {
                                key: "getScopeStatements",
                                value: function (e) {
                                    return s.NodeGuards.isSwitchCaseNode(e) ? e.consequent : e.body
                                }
                            },
                            {
                                key: "parentizeScopeStatementsBeforeAppend",
                                value: function (e, t) {
                                    return t.forEach((function (t) {
                                            t.parentNode = e
                                        })),
                                        t
                                }
                            },
                            {
                                key: "setScopeStatements",
                                value: function (e, t) {
                                    s.NodeGuards.isSwitchCaseNode(e) ? e.consequent = t : e.body = t
                                }
                            }
                        ]),
                        e
                }();
            t.NodeAppender = c
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.AfterObfuscation = "afterObfuscation",
                        e.BeforeObfuscation = "beforeObfuscation"
                }(t.ObfuscationEvent || (t.ObfuscationEvent = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9),
                s = function () {
                    function e() {
                        (0, a.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                                key: "getLexicalScope",
                                value: function (t) {
                                    return e.getLexicalScopesRecursive(t, 1)[0]
                                }
                            },
                            {
                                key: "getLexicalScopes",
                                value: function (t) {
                                    return e.getLexicalScopesRecursive(t)
                                }
                            },
                            {
                                key: "getLexicalScopesRecursive",
                                value: function (t) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                                    if (n.length >= r) return n;
                                    var o = t.parentNode;
                                    if (!o) throw new ReferenceError("`parentNode` property of given node is `undefined`");
                                    return i.NodeGuards.isNodeWithLexicalScope(t) && n.push(t),
                                        t !== o ? e.getLexicalScopesRecursive(o, r, n, ++a) : n
                                }
                            }
                        ]),
                        e
                }();
            t.NodeLexicalScopeUtils = s
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/toConsumableArray")
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.BlockStatementControlFlowTransformer = "BlockStatementControlFlowTransformer",
                        e.ClassDeclarationTransformer = "ClassDeclarationTransformer",
                        e.CommentsTransformer = "CommentsTransformer",
                        e.CustomNodesTransformer = "CustomNodesTransformer",
                        e.DeadCodeInjectionTransformer = "DeadCodeInjectionTransformer",
                        e.EvalCallExpressionTransformer = "EvalCallExpressionTransformer",
                        e.FunctionControlFlowTransformer = "FunctionControlFlowTransformer",
                        e.CatchClauseTransformer = "CatchClauseTransformer",
                        e.FunctionDeclarationTransformer = "FunctionDeclarationTransformer",
                        e.FunctionTransformer = "FunctionTransformer",
                        e.ImportDeclarationTransformer = "ImportDeclarationTransformer",
                        e.LabeledStatementTransformer = "LabeledStatementTransformer",
                        e.LiteralTransformer = "LiteralTransformer",
                        e.MemberExpressionTransformer = "MemberExpressionTransformer",
                        e.MetadataTransformer = "MetadataTransformer",
                        e.MethodDefinitionTransformer = "MethodDefinitionTransformer",
                        e.ObfuscatingGuardsTransformer = "ObfuscatingGuardsTransformer",
                        e.ObjectExpressionKeysTransformer = "ObjectExpressionKeysTransformer",
                        e.ObjectExpressionTransformer = "ObjectExpressionTransformer",
                        e.ParentificationTransformer = "ParentificationTransformer",
                        e.TemplateLiteralTransformer = "TemplateLiteralTransformer",
                        e.VariableDeclarationTransformer = "VariableDeclarationTransformer",
                        e.VariablePreserveTransformer = "VariablePreserveTransformer"
                }(t.NodeTransformer || (t.NodeTransformer = {}))
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/slicedToArray")
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.ConsoleOutputDisableExpressionNode = "ConsoleOutputDisableExpressionNode",
                        e.DebugProtectionFunctionCallNode = "DebugProtectionFunctionCallNode",
                        e.DebugProtectionFunctionIntervalNode = "DebugProtectionFunctionIntervalNode",
                        e.DebugProtectionFunctionNode = "DebugProtectionFunctionNode",
                        e.DomainLockNode = "DomainLockNode",
                        e.NodeCallsControllerFunctionNode = "NodeCallsControllerFunctionNode",
                        e.SelfDefendingUnicodeNode = "SelfDefendingUnicodeNode",
                        e.StringArrayCallsWrapper = "StringArrayCallsWrapper",
                        e.StringArrayNode = "StringArrayNode",
                        e.StringArrayRotateFunctionNode = "StringArrayRotateFunctionNode"
                }(t.CustomNode || (t.CustomNode = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                r(63);
            var i = r(5),
                s = r(21),
                c = function () {
                    function e() {
                        (0, a.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                            key: "obfuscate",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = new s.InversifyContainerFacade;
                                r.load(e, "", t);
                                var n = r.get(i.ServiceIdentifiers.IJavaScriptObfuscator),
                                    a = n.obfuscate(e);
                                return r.unload(),
                                    a
                            }
                        }]),
                        e
                }();
            t.JavaScriptObfuscator = c,
                c.version = "0.18.8"
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4),
                s = r(2),
                c = r(5),
                d = function () {
                    function e(t, r, n) {
                        (0, a.default)(this, e),
                        this.identifierNamesGenerator = t(n),
                            this.randomGenerator = r,
                            this.options = n
                    }
                    return (0, o.default)(e, [{
                                key: "getAppendEvent",
                                value: function () {
                                    return this.appendEvent
                                }
                            },
                            {
                                key: "getCustomNodes",
                                value: function () {
                                    return this.customNodes
                                }
                            },
                            {
                                key: "appendCustomNodeIfExist",
                                value: function (e, t) {
                                    var r = this.customNodes.get(e);
                                    r && t(r)
                                }
                            },
                            {
                                key: "getRandomStackTraceIndex",
                                value: function (e) {
                                    return this.randomGenerator.getRandomInteger(0, Math.max(0, Math.round(e - 1)))
                                }
                            }
                        ]),
                        e
                }();
            d = i.__decorate([s.injectable(), i.__param(0, s.inject(c.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), i.__param(1, s.inject(c.ServiceIdentifiers.IRandomGenerator)), i.__param(2, s.inject(c.ServiceIdentifiers.IOptions)), i.__metadata("design:paramtypes", [Function, Object, Object])], d),
                t.AbstractCustomNodeGroup = d
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                function e() {
                    (0, a.default)(this, e)
                }
                return (0, o.default)(e, null, [{
                        key: "extractDomainFrom",
                        value: function (e) {
                            return (e.indexOf("://") > -1 || 0 === e.indexOf("//") ? e.split("/")[2] : e.split("/")[0]).split(":")[0]
                        }
                    }]),
                    e
            }();
            t.Utils = i,
                i.hexadecimalPrefix = "0x"
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.HexadecimalIdentifierNamesGenerator = "hexadecimal",
                        e.MangledIdentifierNamesGenerator = "mangled"
                }(t.IdentifierNamesGenerator || (t.IdentifierNamesGenerator = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.Inline = "inline",
                        e.Separate = "separate"
                }(t.SourceMapMode || (t.SourceMapMode = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.Base64 = "base64",
                        e.Rc4 = "rc4"
                }(t.StringArrayEncoding || (t.StringArrayEncoding = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(35),
                a = r(23),
                o = r(36);
            t.NO_ADDITIONAL_NODES_PRESET = Object.freeze({
                compact: !0,
                controlFlowFlattening: !1,
                controlFlowFlatteningThreshold: 0,
                deadCodeInjection: !1,
                deadCodeInjectionThreshold: 0,
                debugProtection: !1,
                debugProtectionInterval: !1,
                disableConsoleOutput: !1,
                domainLock: [],
                exclude: [],
                identifierNamesGenerator: n.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator,
                identifiersPrefix: "",
                inputFileName: "",
                log: !1,
                renameGlobals: !1,
                reservedNames: [],
                reservedStrings: [],
                rotateStringArray: !1,
                seed: 0,
                selfDefending: !1,
                sourceMap: !1,
                sourceMapBaseUrl: "",
                sourceMapFileName: "",
                sourceMapMode: o.SourceMapMode.Separate,
                stringArray: !1,
                stringArrayEncoding: !1,
                stringArrayThreshold: 0,
                target: a.ObfuscationTarget.Browser,
                transformObjectKeys: !1,
                unicodeEscapeSequence: !1
            })
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/get")
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                function e() {
                    (0, a.default)(this, e)
                }
                return (0, o.default)(e, null, [{
                            key: "toHex",
                            value: function (e) {
                                return e.toString(16)
                            }
                        },
                        {
                            key: "isCeil",
                            value: function (e) {
                                return e % 1 == 0
                            }
                        }
                    ]),
                    e
            }();
            t.NumberUtils = i
        },
        function (e, t, r) {
            "use strict";
            var n = r(0)(r(1));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(4),
                o = r(2),
                i = r(5),
                s = function e(t) {
                    (0, n.default)(this, e),
                    this.options = t
                };
            s = a.__decorate([o.injectable(), a.__param(0, o.inject(i.ServiceIdentifiers.IOptions)), a.__metadata("design:paramtypes", [Object])], s),
                t.AbstractObfuscatingReplacer = s
        },
        function (e, t, r) {
            "use strict";
            var n = r(0)(r(1));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(4),
                o = r(2),
                i = function e() {
                    (0, n.default)(this, e)
                };
            i = a.__decorate([o.injectable()], i),
                t.AbstractCalleeDataExtractor = i
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = n = function () {
                    function e(t, r, n) {
                        (0, o.default)(this, e),
                        this.replacerDataByControlFlowStorageId = new Map,
                            this.controlFlowCustomNodeFactory = t,
                            this.randomGenerator = r,
                            this.options = n
                    }
                    return (0, i.default)(e, [{
                            key: "insertCustomNodeToControlFlowStorage",
                            value: function (e, t, r, a) {
                                var o = this,
                                    i = t.getStorageId(),
                                    s = n.getStorageKeysByIdForCurrentStorage(this.replacerDataByControlFlowStorageId, i),
                                    c = s.get(r);
                                if (this.randomGenerator.getMathRandom() < a && c && c.length) return this.randomGenerator.getRandomGenerator().pickone(c);
                                var d = function e(r) {
                                    var n = o.randomGenerator.getRandomString(r);
                                    return t.getStorage().has(n) ? e(r) : n
                                }(5);
                                return s.set(r, [d]),
                                    this.replacerDataByControlFlowStorageId.set(i, s),
                                    t.set(d, e),
                                    d
                            }
                        }], [{
                            key: "getStorageKeysByIdForCurrentStorage",
                            value: function (e, t) {
                                return e.has(t) ? e.get(t) : new Map
                            }
                        }]),
                        e
                }();
            u = n = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.Factory__IControlFlowCustomNode)), s.__param(1, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s.__param(2, c.inject(d.ServiceIdentifiers.IOptions)), s.__metadata("design:paramtypes", [Function, Object, Object])], u),
                t.AbstractControlFlowReplacer = u
        },
        function (e, t) {
            e.exports = require("escodegen-wallaby")
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GlobalVariableNoEvalTemplate = function () {
                    return "\n        var that = (typeof window !== 'undefined'\n           ? window\n           : (typeof process === 'object' &&\n              typeof require === 'function' &&\n              typeof global === 'object')\n             ? global\n             : this);\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(35),
                a = r(23),
                o = r(36);
            t.DEFAULT_PRESET = Object.freeze({
                compact: !0,
                config: "",
                controlFlowFlattening: !1,
                controlFlowFlatteningThreshold: .75,
                deadCodeInjection: !1,
                deadCodeInjectionThreshold: .4,
                debugProtection: !1,
                debugProtectionInterval: !1,
                disableConsoleOutput: !1,
                domainLock: [],
                exclude: [],
                identifierNamesGenerator: n.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator,
                identifiersPrefix: "",
                inputFileName: "",
                log: !1,
                renameGlobals: !1,
                reservedNames: [],
                reservedStrings: [],
                rotateStringArray: !0,
                seed: 0,
                selfDefending: !1,
                sourceMap: !1,
                sourceMapBaseUrl: "",
                sourceMapFileName: "",
                sourceMapMode: o.SourceMapMode.Separate,
                stringArray: !0,
                stringArrayEncoding: !1,
                stringArrayThreshold: .75,
                target: a.ObfuscationTarget.Browser,
                transformObjectKeys: !1,
                unicodeEscapeSequence: !1
            })
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.FunctionDeclarationCalleeDataExtractor = "FunctionDeclarationCalleeDataExtractor",
                        e.FunctionExpressionCalleeDataExtractor = "FunctionExpressionCalleeDataExtractor",
                        e.ObjectExpressionCalleeDataExtractor = "ObjectExpressionCalleeDataExtractor"
                }(t.CalleeDataExtractor || (t.CalleeDataExtractor = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.BinaryExpressionControlFlowReplacer = "BinaryExpressionControlFlowReplacer",
                        e.CallExpressionControlFlowReplacer = "CallExpressionControlFlowReplacer",
                        e.LogicalExpressionControlFlowReplacer = "LogicalExpressionControlFlowReplacer",
                        e.StringLiteralControlFlowReplacer = "StringLiteralControlFlowReplacer"
                }(t.ControlFlowReplacer || (t.ControlFlowReplacer = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(22),
                p = r(43),
                m = r(9),
                g = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                            key: "getControlFlowStorageCallNode",
                            value: function (e, t, r, n) {
                                var a = this.controlFlowCustomNodeFactory(f.ControlFlowCustomNode.ExpressionWithOperatorControlFlowStorageCallNode);
                                a.initialize(e, t, r, n);
                                var o = a.getNode()[0];
                                if (!o || !m.NodeGuards.isExpressionStatementNode(o)) throw new Error("`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node");
                                return o.expression
                            }
                        }]),
                        t
                }(p.AbstractControlFlowReplacer);
            g = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IControlFlowCustomNode)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], g),
                t.ExpressionWithOperatorControlFlowReplacer = g
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/typeof")
        },
        function (e, t) {
            e.exports = require("espree")
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.BlockStatementDeadCodeInjectionNode = "BlockStatementDeadCodeInjectionNode"
                }(t.DeadCodeInjectionCustomNode || (t.DeadCodeInjectionCustomNode = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.AssignmentExpressionPropertiesExtractor = "AssignmentExpressionPropertiesExtractor",
                        e.VariableDeclaratorPropertiesExtractor = "VariableDeclaratorPropertiesExtractor"
                }(t.PropertiesExtractor || (t.PropertiesExtractor = {}))
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(30)),
                i = a(r(1)),
                s = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = r(4),
                d = r(2),
                u = r(5),
                l = r(25),
                f = r(14),
                p = r(9),
                m = r(24),
                g = n = function () {
                    function e(t, r) {
                        (0, i.default)(this, e),
                        this.cachedHostNodesWithStatementsMap = new Map,
                            this.cachedHostStatementsMap = new Map,
                            this.randomGenerator = t,
                            this.options = r
                    }
                    return (0, s.default)(e, [{
                                key: "extractPropertiesToExpressionStatements",
                                value: function (e, t) {
                                    for (var r = e.length,
                                            a = [], o = [], i = 0; i < r; i++) {
                                        var s = e[i],
                                            c = s.value;
                                        if (!n.isProhibitedPattern(c)) {
                                            var d = n.getPropertyNodeKeyName(s);
                                            if (d) {
                                                var u = !s.computed || s.computed && !!s.key && p.NodeGuards.isLiteralNode(s.key) ? f.NodeFactory.literalNode(d) : f.NodeFactory.identifierNode(d),
                                                    l = f.NodeFactory.memberExpressionNode(t, u, !0),
                                                    m = f.NodeFactory.expressionStatementNode(f.NodeFactory.assignmentExpressionNode("=", l, c));
                                                p.NodeGuards.isObjectExpressionNode(s.value) && this.transformObjectExpressionNode(s.value, l),
                                                    a.push(m),
                                                    o.push(i)
                                            }
                                        }
                                    }
                                    return [a, o]
                                }
                            },
                            {
                                key: "filterExtractedObjectExpressionProperties",
                                value: function (e, t) {
                                    e.properties = e.properties.filter((function (e, r) {
                                        return !t.includes(r)
                                    }))
                                }
                            },
                            {
                                key: "transformObjectExpressionNode",
                                value: function (e, t) {
                                    var r = e.properties,
                                        n = this.extractPropertiesToExpressionStatements(r, t),
                                        a = (0, o.default)(n, 2),
                                        i = a[0],
                                        s = a[1],
                                        c = this.getHostStatement(e),
                                        d = this.getHostNodeWithStatements(e, c);
                                    return this.filterExtractedObjectExpressionProperties(e, s),
                                        l.NodeAppender.insertAfter(d, i, c),
                                        e
                                }
                            },
                            {
                                key: "getHostNodeWithStatements",
                                value: function (e, t) {
                                    if (this.cachedHostNodesWithStatementsMap.has(e)) return this.cachedHostNodesWithStatementsMap.get(e);
                                    var r = m.NodeStatementUtils.getScopeOfNode(t);
                                    return this.cachedHostNodesWithStatementsMap.set(e, r),
                                        r
                                }
                            },
                            {
                                key: "getHostStatement",
                                value: function (e) {
                                    if (this.cachedHostStatementsMap.has(e)) return this.cachedHostStatementsMap.get(e);
                                    var t = m.NodeStatementUtils.getRootStatementOfNode(e);
                                    return this.cachedHostStatementsMap.set(e, t),
                                        t
                                }
                            }
                        ], [{
                                key: "getPropertyNodeKeyName",
                                value: function (e) {
                                    if (!e.key) return null;
                                    var t = e.key;
                                    return p.NodeGuards.isLiteralNode(t) && "string" == typeof t.value ? t.value : p.NodeGuards.isIdentifierNode(t) ? t.name : null
                                }
                            },
                            {
                                key: "isProhibitedHostParent",
                                value: function (e) {
                                    return p.NodeGuards.isMemberExpressionNode(e)
                                }
                            },
                            {
                                key: "isProhibitedPattern",
                                value: function (e) {
                                    return !e || p.NodeGuards.isObjectPatternNode(e) || p.NodeGuards.isArrayPatternNode(e) || p.NodeGuards.isAssignmentPatternNode(e) || p.NodeGuards.isRestElementNode(e)
                                }
                            }
                        ]),
                        e
                }();
            g = n = c.__decorate([d.injectable(), c.__param(0, d.inject(u.ServiceIdentifiers.IRandomGenerator)), c.__param(1, d.inject(u.ServiceIdentifiers.IOptions)), c.__metadata("design:paramtypes", [Object, Object])], g),
                t.AbstractPropertiesExtractor = g
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.ConsoleOutputCustomNodeGroup = "ConsoleOutputCustomNodeGroup",
                        e.DebugProtectionCustomNodeGroup = "DebugProtectionCustomNodeGroup",
                        e.DomainLockCustomNodeGroup = "DomainLockCustomNodeGroup",
                        e.SelfDefendingCustomNodeGroup = "SelfDefendingCustomNodeGroup",
                        e.StringArrayCustomNodeGroup = "StringArrayCustomNodeGroup"
                }(t.CustomNodeGroup || (t.CustomNodeGroup = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4),
                s = r(2),
                c = r(5),
                d = function () {
                    function e(t, r) {
                        (0, a.default)(this, e),
                        this.preservedNames = [],
                            this.randomGenerator = t,
                            this.options = r
                    }
                    return (0, o.default)(e, [{
                                key: "preserveName",
                                value: function (e) {
                                    this.preservedNames.push(e)
                                }
                            },
                            {
                                key: "isValidIdentifierName",
                                value: function (e) {
                                    return this.notReservedName(e) && !this.preservedNames.includes(e)
                                }
                            },
                            {
                                key: "notReservedName",
                                value: function (e) {
                                    return !this.options.reservedNames.length || !this.options.reservedNames.some((function (t) {
                                        return null !== new RegExp(t, "g").exec(e)
                                    }))
                                }
                            }
                        ]),
                        e
                }();
            d = i.__decorate([s.injectable(), i.__param(0, s.inject(c.ServiceIdentifiers.IRandomGenerator)), i.__param(1, s.inject(c.ServiceIdentifiers.IOptions)), i.__metadata("design:paramtypes", [Object, Object])], d),
                t.AbstractIdentifierNamesGenerator = d
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.BooleanLiteralObfuscatingReplacer = "BooleanLiteralObfuscatingReplacer",
                        e.NumberLiteralObfuscatingReplacer = "NumberLiteralObfuscatingReplacer",
                        e.StringLiteralObfuscatingReplacer = "StringLiteralObfuscatingReplacer"
                }(t.LiteralObfuscatingReplacer || (t.LiteralObfuscatingReplacer = {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.BlackListNodeGuard = "BlackListNodeGuard",
                        e.ConditionalCommentNodeGuard = "ConditionalCommentNodeGuard"
                }(t.ObfuscatingGuard || (t.ObfuscatingGuard = {}))
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(9),
                u = n = function () {
                    function e() {
                        (0, o.default)(this, e),
                        this.obfuscationAllowedForCurrentNode = !0,
                            this.obfuscationAllowedForNextNode = null
                    }
                    return (0, i.default)(e, [{
                                key: "check",
                                value: function (e) {
                                    if (this.obfuscationAllowedForNextNode && (this.obfuscationAllowedForCurrentNode = this.obfuscationAllowedForNextNode, this.obfuscationAllowedForNextNode = null), !d.NodeGuards.isNodeWithComments(e)) return this.obfuscationAllowedForCurrentNode;
                                    var t = e.leadingComments,
                                        r = e.trailingComments;
                                    return t && (this.obfuscationAllowedForCurrentNode = this.checkComments(t)),
                                        r && (this.obfuscationAllowedForNextNode = this.checkComments(r)),
                                        this.obfuscationAllowedForCurrentNode
                                }
                            },
                            {
                                key: "checkComments",
                                value: function (e) {
                                    for (var t = e.length,
                                            r = this.obfuscationAllowedForCurrentNode,
                                            a = 0; a < t; a++) {
                                        var o = e[a];
                                        n.obfuscationEnableCommentRegExp.test(o.value) ? r = !0 : n.obfuscationDisableCommentRegExp.test(o.value) && (r = !1)
                                    }
                                    return r
                                }
                            }
                        ], [{
                            key: "isConditionalComment",
                            value: function (e) {
                                return n.obfuscationEnableCommentRegExp.test(e.value) || n.obfuscationDisableCommentRegExp.test(e.value)
                            }
                        }]),
                        e
                }();
            u.obfuscationEnableCommentRegExp = new RegExp("javascript-obfuscator *: *enable"),
                u.obfuscationDisableCommentRegExp = new RegExp("javascript-obfuscator *: *disable"),
                u = n = s.__decorate([c.injectable()], u),
                t.ConditionalCommentObfuscatingGuard = u
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(28)),
                o = n(r(30)),
                i = n(r(1)),
                s = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = r(4),
                d = r(2),
                u = r(5),
                l = r(10),
                f = function () {
                    function e(t, r) {
                        (0, i.default)(this, e),
                        this.randomGenerator = t,
                            this.options = r
                    }
                    return (0, s.default)(e, [{
                                key: "initialize",
                                value: function () {
                                    this.storage = new Map,
                                        this.storageId = this.randomGenerator.getRandomString(6)
                                }
                            },
                            {
                                key: "get",
                                value: function (e) {
                                    var t = this.storage.get(e);
                                    if (!t) throw new Error("No value found in map storage with key `".concat(e, "`"));
                                    return t
                                }
                            },
                            {
                                key: "getKeyOf",
                                value: function (e) {
                                    var t = !0,
                                        r = !1,
                                        n = void 0;
                                    try {
                                        for (var a, i = this.storage[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                            var s = (0, o.default)(a.value, 2),
                                                c = s[0];
                                            if (e === s[1]) return c
                                        }
                                    } catch (e) {
                                        r = !0,
                                            n = e
                                    } finally {
                                        try {
                                            t || null == i.
                                            return || i.
                                            return()
                                        } finally {
                                            if (r) throw n
                                        }
                                    }
                                    return null
                                }
                            },
                            {
                                key: "getLength",
                                value: function () {
                                    return this.storage.size
                                }
                            },
                            {
                                key: "getStorage",
                                value: function () {
                                    return this.storage
                                }
                            },
                            {
                                key: "getStorageId",
                                value: function () {
                                    return this.storageId
                                }
                            },
                            {
                                key: "has",
                                value: function (e) {
                                    return this.storage.has(e)
                                }
                            },
                            {
                                key: "mergeWith",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    this.storage = new Map([].concat((0, a.default)(this.storage), (0, a.default)(e.getStorage()))),
                                        t && (this.storageId = e.getStorageId())
                                }
                            },
                            {
                                key: "set",
                                value: function (e, t) {
                                    this.storage.set(e, t)
                                }
                            }
                        ]),
                        e
                }();
            c.__decorate([l.initializable(), c.__metadata("design:type", String)], f.prototype, "storageId", void 0),
                c.__decorate([l.initializable(), c.__metadata("design:type", Map)], f.prototype, "storage", void 0),
                c.__decorate([d.postConstruct(), c.__metadata("design:type", Function), c.__metadata("design:paramtypes", []), c.__metadata("design:returntype", void 0)], f.prototype, "initialize", null),
                f = c.__decorate([d.injectable(), c.__param(0, d.inject(u.ServiceIdentifiers.IRandomGenerator)), c.__param(1, d.inject(u.ServiceIdentifiers.IOptions)), c.__metadata("design:paramtypes", [Object, Object])], f),
                t.MapStorage = f
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = s.__importDefault(r(187)),
                l = r(188),
                f = r(10),
                p = n = function () {
                    function e(t, r) {
                        (0, o.default)(this, e),
                        this.sourceCode = t,
                            this.options = r
                    }
                    return (0, i.default)(e, [{
                                key: "initialize",
                                value: function () {
                                    var e, t, r, n = this;
                                    this.seed = 0 !== this.options.seed ? this.options.seed : (e = 0, t = 999999999, Math.floor(Math.random() * (t - e + 1) + e)),
                                        this.randomGenerator = new l.Chance((r = u.default(n.sourceCode.getSourceCode()), n.seed + Number(r.replace(/\D/g, ""))))
                                }
                            },
                            {
                                key: "getMathRandom",
                                value: function () {
                                    return this.getRandomInteger(0, 99999) / 1e5
                                }
                            },
                            {
                                key: "getRandomGenerator",
                                value: function () {
                                    return this.randomGenerator
                                }
                            },
                            {
                                key: "getRandomInteger",
                                value: function (e, t) {
                                    return this.getRandomGenerator().integer({
                                        min: e,
                                        max: t
                                    })
                                }
                            },
                            {
                                key: "getRandomString",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.randomGeneratorPool;
                                    return this.getRandomGenerator().string({
                                        length: e,
                                        pool: t
                                    })
                                }
                            },
                            {
                                key: "getSeed",
                                value: function () {
                                    return this.seed
                                }
                            }
                        ]),
                        e
                }();
            p.randomGeneratorPool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                s.__decorate([f.initializable(), s.__metadata("design:type", Object)], p.prototype, "randomGenerator", void 0),
                s.__decorate([f.initializable(), s.__metadata("design:type", Number)], p.prototype, "seed", void 0),
                s.__decorate([c.postConstruct(), s.__metadata("design:type", Function), s.__metadata("design:paramtypes", []), s.__metadata("design:returntype", void 0)], p.prototype, "initialize", null),
                p = n = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.ISourceCode)), s.__param(1, c.inject(d.ServiceIdentifiers.IOptions)), s.__metadata("design:paramtypes", [Object, Object])], p),
                t.RandomGenerator = p
        },
        function (e, t) {
            e.exports = require("chalk")
        },
        function (e, t) {
            e.exports = require("reflect-metadata")
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = s.__importDefault(r(62)),
                l = r(65),
                f = n = function () {
                    function e(t) {
                        (0, o.default)(this, e),
                        this.options = t
                    }
                    return (0, i.default)(e, [{
                                key: "info",
                                value: function (e, t) {
                                    this.options.log && n.log(n.colorInfo, l.LoggingPrefix.Base, e, t)
                                }
                            },
                            {
                                key: "success",
                                value: function (e, t) {
                                    this.options.log && n.log(n.colorSuccess, l.LoggingPrefix.Base, e, t)
                                }
                            },
                            {
                                key: "warn",
                                value: function (e, t) {
                                    this.options.log && n.log(n.colorWarn, l.LoggingPrefix.Base, e, t)
                                }
                            }
                        ], [{
                            key: "log",
                            value: function (e, t, r, n) {
                                var a = e("\n".concat(t, " ").concat(r));
                                console.log(a, n || "")
                            }
                        }]),
                        e
                }();
            f.colorInfo = u.
            default.cyan,
                f.colorSuccess = u.
            default.green,
                f.colorWarn = u.
            default.yellow,
                f = n = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.IOptions)), s.__metadata("design:paramtypes", [Object])], f),
                t.Logger = f
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.Base = "[javascript-obfuscator]",
                        e.CLI = "[javascript-obfuscator-cli]"
                }(t.LoggingPrefix || (t.LoggingPrefix = {}))
        },
        function (e, t) {
            e.exports = require("@babel/runtime/helpers/construct")
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(21),
                a = r(2),
                o = r(5),
                i = r(47),
                s = r(68),
                c = r(69),
                d = r(70),
                u = r(71);
            t.analyzersModule = new a.ContainerModule((function (e) {
                e(o.ServiceIdentifiers.IStackTraceAnalyzer).to(u.StackTraceAnalyzer).inSingletonScope(),
                    e(o.ServiceIdentifiers.ICalleeDataExtractor).to(s.FunctionDeclarationCalleeDataExtractor).whenTargetNamed(i.CalleeDataExtractor.FunctionDeclarationCalleeDataExtractor),
                    e(o.ServiceIdentifiers.ICalleeDataExtractor).to(c.FunctionExpressionCalleeDataExtractor).whenTargetNamed(i.CalleeDataExtractor.FunctionExpressionCalleeDataExtractor),
                    e(o.ServiceIdentifiers.ICalleeDataExtractor).to(d.ObjectExpressionCalleeDataExtractor).whenTargetNamed(i.CalleeDataExtractor.ObjectExpressionCalleeDataExtractor),
                    e(o.ServiceIdentifiers.Factory__ICalleeDataExtractor).toFactory(n.InversifyContainerFacade.getCacheFactory(o.ServiceIdentifiers.ICalleeDataExtractor))
            }))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = d.__importStar(r(16)),
                f = r(42),
                p = r(9),
                m = r(24),
                g = function (e) {
                    function t() {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).apply(this, arguments))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "extract",
                                value: function (e, t) {
                                    if (!p.NodeGuards.isIdentifierNode(t)) return null;
                                    var r = this.getCalleeBlockStatement(m.NodeStatementUtils.getParentNodeWithStatements(e[0]), t.name);
                                    return r ? {
                                        callee: r,
                                        name: t.name
                                    } : null
                                }
                            },
                            {
                                key: "getCalleeBlockStatement",
                                value: function (e, t) {
                                    var r = null;
                                    return l.traverse(e, {
                                            enter: function (e) {
                                                if (p.NodeGuards.isFunctionDeclarationNode(e) && e.id.name === t) return r = e.body,
                                                    l.VisitorOption.Break
                                            }
                                        }),
                                        r
                                }
                            }
                        ]),
                        t
                }(f.AbstractCalleeDataExtractor);
            g = d.__decorate([u.injectable()], g),
                t.FunctionDeclarationCalleeDataExtractor = g
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = d.__importStar(r(16)),
                f = r(42),
                p = r(9),
                m = r(24),
                g = function (e) {
                    function t() {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).apply(this, arguments))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "extract",
                                value: function (e, t) {
                                    var r = null;
                                    return p.NodeGuards.isIdentifierNode(t) && (r = this.getCalleeBlockStatement(m.NodeStatementUtils.getParentNodeWithStatements(e[0]), t.name)),
                                        p.NodeGuards.isFunctionExpressionNode(t) && (r = t.body),
                                        r ? {
                                            callee: r,
                                            name: t.name || null
                                        } : null
                                }
                            },
                            {
                                key: "getCalleeBlockStatement",
                                value: function (e, t) {
                                    var r = null;
                                    return l.traverse(e, {
                                            enter: function (e, n) {
                                                if (p.NodeGuards.isFunctionExpressionNode(e) && n && p.NodeGuards.isVariableDeclaratorNode(n) && p.NodeGuards.isIdentifierNode(n.id) && n.id.name === t) return r = e.body,
                                                    l.VisitorOption.Break
                                            }
                                        }),
                                        r
                                }
                            }
                        ]),
                        t
                }(f.AbstractCalleeDataExtractor);
            g = d.__decorate([u.injectable()], g),
                t.FunctionExpressionCalleeDataExtractor = g
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = u.__importStar(r(16)),
                p = r(42),
                m = r(9),
                g = r(24),
                N = n = function (e) {
                    function t() {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).apply(this, arguments))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "extract",
                                value: function (e, t) {
                                    if (!m.NodeGuards.isMemberExpressionNode(t)) return null;
                                    var r = this.createObjectMembersCallsChain([], t);
                                    if (!r.length) return null;
                                    var n = r[r.length - 1],
                                        a = this.getCalleeBlockStatement(g.NodeStatementUtils.getParentNodeWithStatements(e[0]), r);
                                    return a ? {
                                        callee: a,
                                        name: n
                                    } : null
                                }
                            },
                            {
                                key: "createObjectMembersCallsChain",
                                value: function (e, t) {
                                    if (m.NodeGuards.isIdentifierNode(t.property) && !1 === t.computed) e.unshift(t.property.name);
                                    else {
                                        if (!m.NodeGuards.isLiteralNode(t.property) || "string" != typeof t.property.value && "number" != typeof t.property.value) return e;
                                        e.unshift(t.property.value)
                                    }
                                    return m.NodeGuards.isMemberExpressionNode(t.object) ? this.createObjectMembersCallsChain(e, t.object) : (m.NodeGuards.isIdentifierNode(t.object) && e.unshift(t.object.name), e)
                                }
                            },
                            {
                                key: "getCalleeBlockStatement",
                                value: function (e, t) {
                                    var r = this,
                                        n = t.shift();
                                    if (!n) return null;
                                    var a = null;
                                    return f.traverse(e, {
                                            enter: function (e) {
                                                if (m.NodeGuards.isVariableDeclaratorNode(e) && m.NodeGuards.isIdentifierNode(e.id) && e.init && m.NodeGuards.isObjectExpressionNode(e.init) && e.id.name === n) return a = r.findCalleeBlockStatement(e.init.properties, t),
                                                    f.VisitorOption.Break
                                            }
                                        }),
                                        a
                                }
                            },
                            {
                                key: "findCalleeBlockStatement",
                                value: function (e, t) {
                                    var r = t.shift();
                                    if (!r) return null;
                                    var a = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (var s, c = e[Symbol.iterator](); !(a = (s = c.next()).done); a = !0) {
                                            var d = s.value;
                                            if (n.isValidTargetPropertyNode(d, r)) {
                                                if (m.NodeGuards.isObjectExpressionNode(d.value)) return this.findCalleeBlockStatement(d.value.properties, t);
                                                if (m.NodeGuards.isFunctionExpressionNode(d.value)) return d.value.body
                                            }
                                        }
                                    } catch (e) {
                                        o = !0,
                                            i = e
                                    } finally {
                                        try {
                                            a || null == c.
                                            return || c.
                                            return()
                                        } finally {
                                            if (o) throw i
                                        }
                                    }
                                    return null
                                }
                            }
                        ], [{
                            key: "isValidTargetPropertyNode",
                            value: function (e, t) {
                                if (!e.key) return !1;
                                var r = m.NodeGuards.isIdentifierNode(e.key) && e.key.name === t,
                                    n = m.NodeGuards.isLiteralNode(e.key) && Boolean(e.key.value) && e.key.value === t;
                                return r || n
                            }
                        }]),
                        t
                }(p.AbstractCalleeDataExtractor);
            N = n = u.__decorate([l.injectable()], N),
                t.ObjectExpressionCalleeDataExtractor = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = s.__importStar(r(16)),
                l = r(47),
                f = r(9),
                p = r(24),
                m = n = function () {
                    function e(t) {
                        (0, o.default)(this, e),
                        this.calleeDataExtractorFactory = t
                    }
                    return (0, i.default)(e, [{
                                key: "analyze",
                                value: function (e) {
                                    return this.analyzeRecursive(e.body)
                                }
                            },
                            {
                                key: "analyzeRecursive",
                                value: function (e) {
                                    for (var t = this,
                                            r = n.getLimitIndex(e.length), a = [], o = e.length, i = function (n) {
                                                if (n > r) return "break";
                                                var o = e[n];
                                                u.traverse(o, {
                                                    enter: function (r) {
                                                        if (f.NodeGuards.isCallExpressionNode(r)) return o.parentNode !== p.NodeStatementUtils.getParentNodeWithStatements(r) ? u.VisitorOption.Skip : void t.analyzeCallExpressionNode(a, e, r)
                                                    }
                                                })
                                            },
                                            s = 0; s < o; s++) {
                                        if ("break" === i(s)) break
                                    }
                                    return a
                                }
                            },
                            {
                                key: "analyzeCallExpressionNode",
                                value: function (e, t, r) {
                                    var a = this;
                                    n.calleeDataExtractorsList.forEach((function (n) {
                                        var o = a.calleeDataExtractorFactory(n).extract(t, r.callee);
                                        o && e.push(Object.assign(Object.assign({},
                                            o), {
                                            stackTrace: a.analyzeRecursive(o.callee.body)
                                        }))
                                    }))
                                }
                            }
                        ], [{
                            key: "getLimitIndex",
                            value: function (e) {
                                var t = e - 1,
                                    r = n.limitThresholdActivationLength - 1,
                                    a = t;
                                return t > r && (a = Math.round(r + t * n.limitThreshold)) > t && (a = t),
                                    a
                            }
                        }]),
                        e
                }();
            m.calleeDataExtractorsList = [l.CalleeDataExtractor.FunctionDeclarationCalleeDataExtractor, l.CalleeDataExtractor.FunctionExpressionCalleeDataExtractor, l.CalleeDataExtractor.ObjectExpressionCalleeDataExtractor],
                m.limitThresholdActivationLength = 25,
                m.limitThreshold = .002,
                m = n = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.Factory__ICalleeDataExtractor)), s.__metadata("design:paramtypes", [Function])], m),
                t.StackTraceAnalyzer = m
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(21),
                a = r(2),
                o = r(5),
                i = r(48),
                s = r(29),
                c = r(73),
                d = r(74),
                u = r(75),
                l = r(76),
                f = r(77),
                p = r(78),
                m = r(79);
            t.controlFlowTransformersModule = new a.ContainerModule((function (e) {
                e(o.ServiceIdentifiers.INodeTransformer).to(d.BlockStatementControlFlowTransformer).whenTargetNamed(s.NodeTransformer.BlockStatementControlFlowTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(l.DeadCodeInjectionTransformer).whenTargetNamed(s.NodeTransformer.DeadCodeInjectionTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(f.FunctionControlFlowTransformer).whenTargetNamed(s.NodeTransformer.FunctionControlFlowTransformer),
                    e(o.ServiceIdentifiers.IControlFlowReplacer).to(c.BinaryExpressionControlFlowReplacer).whenTargetNamed(i.ControlFlowReplacer.BinaryExpressionControlFlowReplacer),
                    e(o.ServiceIdentifiers.IControlFlowReplacer).to(u.CallExpressionControlFlowReplacer).whenTargetNamed(i.ControlFlowReplacer.CallExpressionControlFlowReplacer),
                    e(o.ServiceIdentifiers.IControlFlowReplacer).to(p.LogicalExpressionControlFlowReplacer).whenTargetNamed(i.ControlFlowReplacer.LogicalExpressionControlFlowReplacer),
                    e(o.ServiceIdentifiers.IControlFlowReplacer).to(m.StringLiteralControlFlowReplacer).whenTargetNamed(i.ControlFlowReplacer.StringLiteralControlFlowReplacer),
                    e(o.ServiceIdentifiers.Factory__IControlFlowReplacer).toFactory(n.InversifyContainerFacade.getCacheFactory(o.ServiceIdentifiers.IControlFlowReplacer))
            }))
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(22),
                m = r(49),
                g = n = function (e) {
                    function t(e, r, n) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                            key: "replace",
                            value: function (e, t, r) {
                                var a = e.operator,
                                    o = this.controlFlowCustomNodeFactory(p.ControlFlowCustomNode.BinaryExpressionFunctionNode);
                                o.initialize(a);
                                var i = this.insertCustomNodeToControlFlowStorage(o, r, a, n.usingExistingIdentifierChance);
                                return this.getControlFlowStorageCallNode(r.getStorageId(), i, e.left, e.right)
                            }
                        }]),
                        t
                }(m.ExpressionWithOperatorControlFlowReplacer);
            g.usingExistingIdentifierChance = .5,
                g = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], g),
                t.BinaryExpressionControlFlowReplacer = g
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importStar(r(16)),
                m = r(22),
                g = r(12),
                N = r(13),
                v = r(9),
                y = r(11),
                _ = n = function (e) {
                    function t(e, r, n, a) {
                        var i;
                        return (0, o.default)(this, t),
                            (i = (0, s.default)(this, (0, c.default)(t).call(this, n, a))).controlFlowCustomNodeFactory = e,
                            i.arrayUtils = r,
                            i
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case g.TransformationStage.ControlFlowFlattening:
                                            return {
                                                leave:
                                                    function (e, r) {
                                                        if (r && v.NodeGuards.isBlockStatementNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    if (this.randomGenerator.getMathRandom() > this.options.controlFlowFlatteningThreshold || !n.canTransformBlockStatementNode(e)) return e;
                                    var r = e.body,
                                        a = this.arrayUtils.createWithRange(r.length),
                                        o = this.arrayUtils.shuffle(a),
                                        i = a.map((function (e) {
                                            return o.indexOf(e)
                                        })),
                                        s = this.controlFlowCustomNodeFactory(m.ControlFlowCustomNode.BlockStatementControlFlowFlatteningNode);
                                    s.initialize(r, o, i);
                                    var c = s.getNode()[0];
                                    return y.NodeUtils.parentizeNode(c, t),
                                        c
                                }
                            }
                        ], [{
                                key: "isProhibitedStatementNode",
                                value: function (e) {
                                    var t = v.NodeGuards.isBreakStatementNode(e) || v.NodeGuards.isContinueStatementNode(e),
                                        r = v.NodeGuards.isVariableDeclarationNode(e) && ("const" === e.kind || "let" === e.kind),
                                        n = v.NodeGuards.isClassDeclarationNode(e);
                                    return v.NodeGuards.isFunctionDeclarationNode(e) || t || r || n
                                }
                            },
                            {
                                key: "canTransformBlockStatementNode",
                                value: function (e) {
                                    var t = !0;
                                    return p.traverse(e, {
                                            enter: function (e) {
                                                if (v.NodeGuards.isWhileStatementNode(e)) return p.VisitorOption.Skip;
                                                n.isProhibitedStatementNode(e) && (t = !1)
                                            }
                                        }),
                                        e.body.length <= 4 && (t = !1),
                                        t
                                }
                            }
                        ]),
                        t
                }(N.AbstractNodeTransformer);
            _ = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), u.__param(1, l.inject(f.ServiceIdentifiers.IArrayUtils)), u.__param(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(3, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object, Object])], _),
                t.BlockStatementControlFlowTransformer = _
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(22),
                m = r(43),
                g = r(9),
                N = n = function (e) {
                    function t(e, r, n) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "replace",
                                value: function (e, t, r) {
                                    var a = e.callee;
                                    if (!g.NodeGuards.isIdentifierNode(a)) return e;
                                    var o = String(e.arguments.length),
                                        i = this.controlFlowCustomNodeFactory(p.ControlFlowCustomNode.CallExpressionFunctionNode),
                                        s = e.arguments;
                                    i.initialize(s);
                                    var c = this.insertCustomNodeToControlFlowStorage(i, r, o, n.usingExistingIdentifierChance);
                                    return this.getControlFlowStorageCallNode(r.getStorageId(), c, a, s)
                                }
                            },
                            {
                                key: "getControlFlowStorageCallNode",
                                value: function (e, t, r, n) {
                                    var a = this.controlFlowCustomNodeFactory(p.ControlFlowCustomNode.CallExpressionControlFlowStorageCallNode);
                                    a.initialize(e, t, r, n);
                                    var o = a.getNode()[0];
                                    if (!o || !g.NodeGuards.isExpressionStatementNode(o)) throw new Error("`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node");
                                    return o.expression
                                }
                            }
                        ]),
                        t
                }(m.AbstractControlFlowReplacer);
            N.usingExistingIdentifierChance = .5,
                N = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.CallExpressionControlFlowReplacer = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importStar(r(16)),
                m = r(52),
                g = r(29),
                N = r(19),
                v = r(12),
                y = r(13),
                _ = r(14),
                h = r(9),
                b = r(24),
                S = r(11),
                I = n = function (e) {
                    function t(e, r, n, a) {
                        var i;
                        return (0, o.default)(this, t),
                            (i = (0, s.default)(this, (0, c.default)(t).call(this, n, a))).deadCodeInjectionRootAstHostNodeSet = new Set,
                            i.collectedBlockStatements = [],
                            i.collectedBlockStatementsTotalLength = 0,
                            i.deadCodeInjectionCustomNodeFactory = e,
                            i.transformersRunner = r,
                            i
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case v.TransformationStage.DeadCodeInjection:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && h.NodeGuards.isProgramNode(e)) return t.analyzeNode(e, r),
                                                            e
                                                    },
                                                    leave: function (e, r) {
                                                        if (r && h.NodeGuards.isBlockStatementNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        case v.TransformationStage.Finalizing:
                                            return this.deadCodeInjectionRootAstHostNodeSet.size ? {
                                                enter: function (e, r) {
                                                    if (r && t.isDeadCodeInjectionRootAstHostNode(e)) return t.restoreNode(e, r)
                                                }
                                            } : null;
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "analyzeNode",
                                value: function (e, t) {
                                    var r = this;
                                    p.traverse(e, {
                                            enter: function (e) {
                                                if (h.NodeGuards.isBlockStatementNode(e)) {
                                                    var t = S.NodeUtils.clone(e);
                                                    if (n.isValidCollectedBlockStatementNode(t)) {
                                                        var a = r.makeClonedBlockStatementNodeUnique(t);
                                                        r.collectedBlockStatements.push(a)
                                                    }
                                                }
                                            }
                                        }),
                                        this.collectedBlockStatementsTotalLength = this.collectedBlockStatements.length
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    if (!this.collectedBlockStatements.length || this.collectedBlockStatementsTotalLength < n.minCollectedBlockStatementsCount) return p.VisitorOption.Break;
                                    if (this.randomGenerator.getMathRandom() > this.options.deadCodeInjectionThreshold || !n.isValidWrappedBlockStatementNode(e)) return e;
                                    var r = this.collectedBlockStatements.length - 1,
                                        a = this.randomGenerator.getRandomInteger(0, r),
                                        o = this.collectedBlockStatements.splice(a, 1)[0];
                                    return o === e ? e : this.replaceBlockStatementNode(e, o, t)
                                }
                            },
                            {
                                key: "restoreNode",
                                value: function (e, t) {
                                    var r = e.body[0];
                                    if (!h.NodeGuards.isFunctionDeclarationNode(r)) throw new Error("Wrong dead code injection root AST host node. Host node should contain `FunctionDeclaration` node");
                                    return r.body
                                }
                            },
                            {
                                key: "isDeadCodeInjectionRootAstHostNode",
                                value: function (e) {
                                    return h.NodeGuards.isBlockStatementNode(e) && this.deadCodeInjectionRootAstHostNodeSet.has(e)
                                }
                            },
                            {
                                key: "makeClonedBlockStatementNodeUnique",
                                value: function (e) {
                                    var t = _.NodeFactory.functionExpressionNode([], e);
                                    return S.NodeUtils.parentizeNode(t, t),
                                        S.NodeUtils.parentizeNode(e, t),
                                        this.transformersRunner.transform(t, n.transformersToRenameBlockScopeIdentifiers, v.TransformationStage.Obfuscating).body
                                }
                            },
                            {
                                key: "replaceBlockStatementNode",
                                value: function (e, t, r) {
                                    var a = _.NodeFactory.blockStatementNode([_.NodeFactory.functionDeclarationNode(n.deadCodeInjectionRootAstHostNodeName, [], t)]);
                                    this.deadCodeInjectionRootAstHostNodeSet.add(a);
                                    var o = this.deadCodeInjectionCustomNodeFactory(m.DeadCodeInjectionCustomNode.BlockStatementDeadCodeInjectionNode);
                                    o.initialize(e, a);
                                    var i = o.getNode()[0];
                                    return S.NodeUtils.parentizeNode(i, r),
                                        i
                                }
                            }
                        ], [{
                                key: "isProhibitedNodeInsideCollectedBlockStatement",
                                value: function (e) {
                                    return h.NodeGuards.isBreakStatementNode(e) || h.NodeGuards.isContinueStatementNode(e) || h.NodeGuards.isAwaitExpressionNode(e) || h.NodeGuards.isSuperNode(e)
                                }
                            },
                            {
                                key: "isScopeHoistingFunctionDeclaration",
                                value: function (e) {
                                    if (!h.NodeGuards.isFunctionDeclarationNode(e)) return !1;
                                    var t = b.NodeStatementUtils.getScopeOfNode(e),
                                        r = h.NodeGuards.isSwitchCaseNode(t) ? t.consequent : t.body,
                                        n = r.indexOf(e);
                                    if (0 === n) return !1;
                                    var a = r.slice(0, n),
                                        o = _.NodeFactory.blockStatementNode(a),
                                        i = e.id.name,
                                        s = !1;
                                    return p.traverse(o, {
                                            enter: function (e) {
                                                if (h.NodeGuards.isIdentifierNode(e) && e.name === i) return s = !0,
                                                    p.VisitorOption.Break
                                            }
                                        }),
                                        s
                                }
                            },
                            {
                                key: "isValidCollectedBlockStatementNode",
                                value: function (e) {
                                    if (!e.body.length) return !1;
                                    var t = 0,
                                        r = !0;
                                    return p.traverse(e, {
                                            enter: function (e) {
                                                if (h.NodeGuards.isBlockStatementNode(e) && t++, t > n.maxNestedBlockStatementsCount || n.isProhibitedNodeInsideCollectedBlockStatement(e) || n.isScopeHoistingFunctionDeclaration(e)) return r = !1,
                                                    p.VisitorOption.Break
                                            }
                                        }),
                                        r
                                }
                            },
                            {
                                key: "isValidWrappedBlockStatementNode",
                                value: function (e) {
                                    if (!e.body.length) return !1;
                                    var t = !0;
                                    return p.traverse(e, {
                                            enter: function (e) {
                                                if (n.isScopeHoistingFunctionDeclaration(e)) return t = !1,
                                                    p.VisitorOption.Break
                                            }
                                        }),
                                        !!t && b.NodeStatementUtils.getParentNodeWithStatements(e).type !== N.NodeType.Program
                                }
                            }
                        ]),
                        t
                }(y.AbstractNodeTransformer);
            I.deadCodeInjectionRootAstHostNodeName = "deadCodeInjectionRootAstHostNode",
                I.maxNestedBlockStatementsCount = 4,
                I.minCollectedBlockStatementsCount = 5,
                I.transformersToRenameBlockScopeIdentifiers = [g.NodeTransformer.CatchClauseTransformer, g.NodeTransformer.ClassDeclarationTransformer, g.NodeTransformer.FunctionDeclarationTransformer, g.NodeTransformer.FunctionTransformer, g.NodeTransformer.LabeledStatementTransformer, g.NodeTransformer.VariableDeclarationTransformer],
                I = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IDeadCodeInjectionCustomNode)), u.__param(1, l.inject(f.ServiceIdentifiers.ITransformersRunner)), u.__param(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(3, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object, Object])], I),
                t.DeadCodeInjectionTransformer = I
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importStar(r(16)),
                m = r(22),
                g = r(48),
                N = r(19),
                v = r(12),
                y = r(13),
                _ = r(25),
                h = r(9),
                b = r(17),
                S = r(24),
                I = n = function (e) {
                    function t(e, r, n, a, i) {
                        var d;
                        return (0, o.default)(this, t),
                            (d = (0, s.default)(this, (0, c.default)(t).call(this, a, i))).controlFlowData = new Map,
                            d.visitedFunctionNodes = new Set,
                            d.hostNodesWithControlFlowNode = new Set,
                            d.controlFlowStorageFactory = e,
                            d.controlFlowReplacerFactory = r,
                            d.controlFlowCustomNodeFactory = n,
                            d
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case v.TransformationStage.ControlFlowFlattening:
                                            return {
                                                leave:
                                                    function (e, r) {
                                                        if (r && (h.NodeGuards.isFunctionDeclarationNode(e) || h.NodeGuards.isFunctionExpressionNode(e) || h.NodeGuards.isArrowFunctionExpressionNode(e))) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    if (this.visitedFunctionNodes.add(e), !h.NodeGuards.isBlockStatementNode(e.body)) return e;
                                    var r = this.getHostNode(e.body),
                                        n = this.getControlFlowStorage(r);
                                    if (this.controlFlowData.set(r, n), this.transformFunctionBody(e.body, n), !n.getLength()) return e;
                                    var a = this.controlFlowCustomNodeFactory(m.ControlFlowCustomNode.ControlFlowStorageNode);
                                    return a.initialize(n),
                                        _.NodeAppender.prepend(r, a.getNode()),
                                        this.hostNodesWithControlFlowNode.add(r),
                                        e
                                }
                            },
                            {
                                key: "getControlFlowStorage",
                                value: function (e) {
                                    var t = this.controlFlowStorageFactory();
                                    if (this.controlFlowData.has(e)) {
                                        this.hostNodesWithControlFlowNode.has(e) && (h.NodeGuards.isSwitchCaseNode(e) ? e.consequent.shift() : e.body.shift());
                                        var r = this.controlFlowData.get(e);
                                        t.mergeWith(r, !0)
                                    }
                                    return t
                                }
                            },
                            {
                                key: "getHostNode",
                                value: function (e) {
                                    var t = S.NodeStatementUtils.getParentNodesWithStatements(e);
                                    return 1 === t.length ? e : (t.pop(), t.length > n.hostNodeSearchMinDepth && t.splice(0, n.hostNodeSearchMinDepth), t.length > n.hostNodeSearchMaxDepth && (t.length = n.hostNodeSearchMaxDepth), this.randomGenerator.getRandomGenerator().pickone(t))
                                }
                            },
                            {
                                key: "isVisitedFunctionNode",
                                value: function (e) {
                                    return (h.NodeGuards.isFunctionDeclarationNode(e) || h.NodeGuards.isFunctionExpressionNode(e) || h.NodeGuards.isArrowFunctionExpressionNode(e)) && this.visitedFunctionNodes.has(e)
                                }
                            },
                            {
                                key: "transformFunctionBody",
                                value: function (e, t) {
                                    var r = this;
                                    p.replace(e, {
                                        enter: function (e, a) {
                                            if (b.NodeMetadata.isIgnoredNode(e)) return p.VisitorOption.Skip;
                                            if (r.isVisitedFunctionNode(e) || !a) return p.VisitorOption.Skip;
                                            if (!n.controlFlowReplacersMap.has(e.type)) return e;
                                            if (r.randomGenerator.getMathRandom() > r.options.controlFlowFlatteningThreshold) return e;
                                            var o = n.controlFlowReplacersMap.get(e.type);
                                            return void 0 === o ? e : Object.assign(Object.assign({},
                                                r.controlFlowReplacerFactory(o).replace(e, a, t)), {
                                                parentNode: a
                                            })
                                        }
                                    })
                                }
                            }
                        ]),
                        t
                }(y.AbstractNodeTransformer);
            I.controlFlowReplacersMap = new Map([
                    [N.NodeType.BinaryExpression, g.ControlFlowReplacer.BinaryExpressionControlFlowReplacer],
                    [N.NodeType.CallExpression, g.ControlFlowReplacer.CallExpressionControlFlowReplacer],
                    [N.NodeType.LogicalExpression, g.ControlFlowReplacer.LogicalExpressionControlFlowReplacer],
                    [N.NodeType.Literal, g.ControlFlowReplacer.StringLiteralControlFlowReplacer]
                ]),
                I.hostNodeSearchMinDepth = 0,
                I.hostNodeSearchMaxDepth = 2,
                I = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__TControlFlowStorage)), u.__param(1, l.inject(f.ServiceIdentifiers.Factory__IControlFlowReplacer)), u.__param(2, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), u.__param(3, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(4, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Function, Function, Object, Object])], I),
                t.FunctionControlFlowTransformer = I
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(22),
                m = r(49),
                g = r(9),
                N = r(11),
                v = n = function (e) {
                    function t(e, r, n) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "replace",
                                value: function (e, t, r) {
                                    if (this.checkForProhibitedExpressions(e.left, e.right)) return e;
                                    var a = e.operator,
                                        o = this.controlFlowCustomNodeFactory(p.ControlFlowCustomNode.LogicalExpressionFunctionNode);
                                    o.initialize(a);
                                    var i = this.insertCustomNodeToControlFlowStorage(o, r, a, n.usingExistingIdentifierChance);
                                    return this.getControlFlowStorageCallNode(r.getStorageId(), i, e.left, e.right)
                                }
                            },
                            {
                                key: "checkForProhibitedExpressions",
                                value: function (e, t) {
                                    return [e, t].some((function (e) {
                                        var t;
                                        return t = g.NodeGuards.isUnaryExpressionNode(e) ? N.NodeUtils.getUnaryExpressionArgumentNode(e) : e,
                                            !(g.NodeGuards.isLiteralNode(t) || g.NodeGuards.isIdentifierNode(t) || g.NodeGuards.isObjectExpressionNode(t) || g.NodeGuards.isExpressionStatementNode(t))
                                    }))
                                }
                            }
                        ]),
                        t
                }(m.ExpressionWithOperatorControlFlowReplacer);
            v.usingExistingIdentifierChance = .5,
                v = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], v),
                t.LogicalExpressionControlFlowReplacer = v
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(22),
                m = r(43),
                g = r(9),
                N = n = function (e) {
                    function t(e, r, n) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "replace",
                                value: function (e, t, r) {
                                    if (g.NodeGuards.isPropertyNode(t) && t.key === e) return e;
                                    if ("string" != typeof e.value || e.value.length < 3) return e;
                                    var a = String(e.value),
                                        o = this.controlFlowCustomNodeFactory(p.ControlFlowCustomNode.StringLiteralNode);
                                    o.initialize(e.value);
                                    var i = this.insertCustomNodeToControlFlowStorage(o, r, a, n.usingExistingIdentifierChance);
                                    return this.getControlFlowStorageCallNode(r.getStorageId(), i)
                                }
                            },
                            {
                                key: "getControlFlowStorageCallNode",
                                value: function (e, t) {
                                    var r = this.controlFlowCustomNodeFactory(p.ControlFlowCustomNode.StringLiteralControlFlowStorageCallNode);
                                    r.initialize(e, t);
                                    var n = r.getNode()[0];
                                    if (!n || !g.NodeGuards.isExpressionStatementNode(n)) throw new Error("`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node");
                                    return n.expression
                                }
                            }
                        ]),
                        t
                }(m.AbstractControlFlowReplacer);
            N.usingExistingIdentifierChance = 1,
                N = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.StringLiteralControlFlowReplacer = N
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2),
                a = r(21),
                o = r(5),
                i = r(29),
                s = r(53),
                c = r(81),
                d = r(82),
                u = r(83),
                l = r(84),
                f = r(85),
                p = r(86),
                m = r(87);
            t.convertingTransformersModule = new n.ContainerModule((function (e) {
                e(o.ServiceIdentifiers.INodeTransformer).to(d.MemberExpressionTransformer).whenTargetNamed(i.NodeTransformer.MemberExpressionTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(u.MethodDefinitionTransformer).whenTargetNamed(i.NodeTransformer.MethodDefinitionTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(l.ObjectExpressionKeysTransformer).whenTargetNamed(i.NodeTransformer.ObjectExpressionKeysTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(f.ObjectExpressionTransformer).whenTargetNamed(i.NodeTransformer.ObjectExpressionTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(p.TemplateLiteralTransformer).whenTargetNamed(i.NodeTransformer.TemplateLiteralTransformer),
                    e(o.ServiceIdentifiers.IPropertiesExtractor).to(c.AssignmentExpressionPropertiesExtractor).whenTargetNamed(s.PropertiesExtractor.AssignmentExpressionPropertiesExtractor),
                    e(o.ServiceIdentifiers.IPropertiesExtractor).to(m.VariableDeclaratorPropertiesExtractor).whenTargetNamed(s.PropertiesExtractor.VariableDeclaratorPropertiesExtractor),
                    e(o.ServiceIdentifiers.Factory__IPropertiesExtractor).toFactory(a.InversifyContainerFacade.getCacheFactory(o.ServiceIdentifiers.IPropertiesExtractor))
            }))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(54),
                p = function (e) {
                    function t(e, r) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                            key: "extract",
                            value: function (e, t) {
                                var r = t.parentNode,
                                    n = t.left;
                                return f.AbstractPropertiesExtractor.isProhibitedPattern(n) ? e : r && f.AbstractPropertiesExtractor.isProhibitedHostParent(r) ? e : this.transformObjectExpressionNode(e, n)
                            }
                        }]),
                        t
                }(f.AbstractPropertiesExtractor);
            p = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object, Object])], p),
                t.AssignmentExpressionPropertiesExtractor = p
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(12),
                p = r(13),
                m = r(14),
                g = r(9),
                N = function (e) {
                    function t(e, r) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case f.TransformationStage.Converting:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && g.NodeGuards.isMemberExpressionNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    if (g.NodeGuards.isIdentifierNode(e.property)) {
                                        if (e.computed) return e;
                                        e.computed = !0,
                                            e.property = m.NodeFactory.literalNode(e.property.name)
                                    }
                                    return e
                                }
                            }
                        ]),
                        t
                }(p.AbstractNodeTransformer);
            N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object, Object])], N),
                t.MemberExpressionTransformer = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(12),
                m = r(13),
                g = r(14),
                N = r(9),
                v = n = function (e) {
                    function t(e, r) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case p.TransformationStage.Converting:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && N.NodeGuards.isMethodDefinitionNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    return N.NodeGuards.isIdentifierNode(e.key) && !n.ignoredNames.includes(e.key.name) && !1 === e.computed && (e.computed = !0, e.key = g.NodeFactory.literalNode(e.key.name)),
                                        e
                                }
                            }
                        ]),
                        t
                }(m.AbstractNodeTransformer);
            v.ignoredNames = ["constructor"],
                v = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Object, Object])], v),
                t.MethodDefinitionTransformer = v
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(19),
                m = r(53),
                g = r(12),
                N = r(13),
                v = r(9),
                y = n = function (e) {
                    function t(e, r, n) {
                        var a;
                        return (0, o.default)(this, t),
                            (a = (0, s.default)(this, (0, c.default)(t).call(this, r, n))).propertiesExtractorFactory = e,
                            a
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    return e !== g.TransformationStage.Converting ? null : {
                                        enter: function (e, r) {
                                            if (t.options.transformObjectKeys && r && v.NodeGuards.isObjectExpressionNode(e)) return t.transformNode(e, r)
                                        }
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    if (!e.properties.length) return e;
                                    var r = n.propertiesExtractorsMap.get(t.type);
                                    return r ? this.propertiesExtractorFactory(r).extract(e, t) : e
                                }
                            }
                        ]),
                        t
                }(N.AbstractNodeTransformer);
            y.propertiesExtractorsMap = new Map([
                    [p.NodeType.AssignmentExpression, m.PropertiesExtractor.AssignmentExpressionPropertiesExtractor],
                    [p.NodeType.VariableDeclarator, m.PropertiesExtractor.VariableDeclaratorPropertiesExtractor]
                ]),
                y = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IPropertiesExtractor)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], y),
                t.ObjectExpressionKeysTransformer = y
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(12),
                p = r(13),
                m = r(14),
                g = r(9),
                N = function (e) {
                    function t(e, r, n) {
                        var o;
                        return (0, a.default)(this, t),
                            (o = (0, i.default)(this, (0, s.default)(t).call(this, r, n))).escapeSequenceEncoder = e,
                            o
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case f.TransformationStage.Converting:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && g.NodeGuards.isObjectExpressionNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = this;
                                    return e.properties.forEach((function (e) {
                                            e.key && (e.computed ? r.transformComputedProperty(e) : r.transformBaseProperty(e))
                                        })),
                                        e
                                }
                            },
                            {
                                key: "transformComputedProperty",
                                value: function (e) {
                                    g.NodeGuards.isLiteralNode(e.key) && "string" == typeof e.key.value && (e.key = m.NodeFactory.literalNode(this.getPropertyKeyValue(e.key.value)))
                                }
                            },
                            {
                                key: "transformBaseProperty",
                                value: function (e) {
                                    e.shorthand && (e.shorthand = !1),
                                        g.NodeGuards.isIdentifierNode(e.key) && (e.key = m.NodeFactory.literalNode(this.getPropertyKeyValue(e.key.name)))
                                }
                            },
                            {
                                key: "getPropertyKeyValue",
                                value: function (e) {
                                    return this.options.unicodeEscapeSequence ? this.escapeSequenceEncoder.encode(e, !0) : e
                                }
                            }
                        ]),
                        t
                }(p.AbstractNodeTransformer);
            N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IEscapeSequenceEncoder)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object, Object, Object])], N),
                t.ObjectExpressionTransformer = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(12),
                m = r(13),
                g = r(14),
                N = r(9),
                v = r(11),
                y = n = function (e) {
                    function t(e, r) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case p.TransformationStage.Converting:
                                            return {
                                                leave:
                                                    function (e, r) {
                                                        if (r && n.isValidTemplateLiteralNode(e, r)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r, a = e.expressions,
                                        o = [];
                                    if (e.quasis.forEach((function (e) {
                                            o.push(g.NodeFactory.literalNode(e.value.cooked));
                                            var t = a.shift();
                                            t && o.push(t)
                                        })), o = o.filter((function (e) {
                                            return !(N.NodeGuards.isLiteralNode(e) && "" === e.value)
                                        })), n.isLiteralNodeWithStringValue(o[0]) || n.isLiteralNodeWithStringValue(o[1]) || o.unshift(g.NodeFactory.literalNode("")), o.length > 1) {
                                        var i = g.NodeFactory.binaryExpressionNode("+", o.shift(), o.shift());
                                        o.forEach((function (e) {
                                                i = g.NodeFactory.binaryExpressionNode("+", i, e)
                                            })),
                                            r = i
                                    } else r = o[0];
                                    return v.NodeUtils.parentizeAst(r),
                                        r
                                }
                            }
                        ], [{
                                key: "isLiteralNodeWithStringValue",
                                value: function (e) {
                                    return e && N.NodeGuards.isLiteralNode(e) && "string" == typeof e.value
                                }
                            },
                            {
                                key: "isValidTemplateLiteralNode",
                                value: function (e, t) {
                                    return N.NodeGuards.isTemplateLiteralNode(e) && !N.NodeGuards.isTaggedTemplateExpressionNode(t)
                                }
                            }
                        ]),
                        t
                }(m.AbstractNodeTransformer);
            y = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Object, Object])], y),
                t.TemplateLiteralTransformer = y
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importStar(r(16)),
                p = r(54),
                m = r(9),
                g = function (e) {
                    function t(e, r) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "extract",
                                value: function (e, t) {
                                    return !m.NodeGuards.isIdentifierNode(t.id) || this.isProhibitedObjectExpressionNode(e, t.id) ? e : this.transformObjectExpressionNode(e, t.id)
                                }
                            },
                            {
                                key: "getHostVariableDeclaratorNode",
                                value: function (e) {
                                    var t = e.parentNode;
                                    if (!t || !m.NodeGuards.isVariableDeclaratorNode(t)) throw new Error("Cannot get `VariableDeclarator` node for `ObjectExpression` node");
                                    return t
                                }
                            },
                            {
                                key: "getHostVariableDeclarationNode",
                                value: function (e) {
                                    var t = e.parentNode;
                                    if (!t || !m.NodeGuards.isVariableDeclarationNode(t)) throw new Error("Cannot get `VariableDeclaration` node for `VariableDeclarator` node");
                                    return t
                                }
                            },
                            {
                                key: "isProhibitedObjectExpressionNode",
                                value: function (e, t) {
                                    var r = this.getHostVariableDeclaratorNode(e),
                                        n = this.getHostVariableDeclarationNode(r).declarations,
                                        a = n.indexOf(r);
                                    if (a === n.length - 1) return !1;
                                    var o = n.slice(a),
                                        i = !1;
                                    return o.forEach((function (e) {
                                            f.traverse(e, {
                                                enter: function (e) {
                                                    return m.NodeGuards.isMemberExpressionNode(e) && m.NodeGuards.isIdentifierNode(e.object) && e.object.name === t.name ? (i = !0, f.VisitorOption.Break) : e
                                                }
                                            })
                                        })),
                                        i
                                }
                            }
                        ]),
                        t
                }(p.AbstractPropertiesExtractor);
            g = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object, Object])], g),
                t.VariableDeclaratorPropertiesExtractor = g
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(21),
                a = r(2),
                o = r(5),
                i = r(22),
                s = r(31),
                c = r(55),
                d = r(52),
                u = r(89),
                l = r(90),
                f = r(91),
                p = r(92),
                m = r(93),
                g = r(94),
                N = r(97),
                v = r(98),
                y = r(99),
                _ = r(100),
                h = r(101),
                b = r(102),
                S = r(104),
                I = r(106),
                C = r(108),
                O = r(112),
                F = r(114),
                j = r(115),
                T = r(116),
                k = r(118),
                x = r(120),
                E = r(127),
                w = r(129),
                G = r(132),
                R = r(133);
            t.customNodesModule = new a.ContainerModule((function (e) {
                e(o.ServiceIdentifiers.ICustomNode).to(b.ConsoleOutputDisableExpressionNode).whenTargetNamed(s.CustomNode.ConsoleOutputDisableExpressionNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(S.DebugProtectionFunctionCallNode).whenTargetNamed(s.CustomNode.DebugProtectionFunctionCallNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(I.DebugProtectionFunctionIntervalNode).whenTargetNamed(s.CustomNode.DebugProtectionFunctionIntervalNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(C.DebugProtectionFunctionNode).whenTargetNamed(s.CustomNode.DebugProtectionFunctionNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(O.DomainLockNode).whenTargetNamed(s.CustomNode.DomainLockNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(T.NodeCallsControllerFunctionNode).whenTargetNamed(s.CustomNode.NodeCallsControllerFunctionNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(k.SelfDefendingUnicodeNode).whenTargetNamed(s.CustomNode.SelfDefendingUnicodeNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(x.StringArrayCallsWrapper).whenTargetNamed(s.CustomNode.StringArrayCallsWrapper),
                    e(o.ServiceIdentifiers.ICustomNode).to(E.StringArrayNode).whenTargetNamed(s.CustomNode.StringArrayNode),
                    e(o.ServiceIdentifiers.ICustomNode).to(w.StringArrayRotateFunctionNode).whenTargetNamed(s.CustomNode.StringArrayRotateFunctionNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(g.BinaryExpressionFunctionNode).whenTargetNamed(i.ControlFlowCustomNode.BinaryExpressionFunctionNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(N.BlockStatementControlFlowFlatteningNode).whenTargetNamed(i.ControlFlowCustomNode.BlockStatementControlFlowFlatteningNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(y.CallExpressionControlFlowStorageCallNode).whenTargetNamed(i.ControlFlowCustomNode.CallExpressionControlFlowStorageCallNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(_.CallExpressionFunctionNode).whenTargetNamed(i.ControlFlowCustomNode.CallExpressionFunctionNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(h.ControlFlowStorageNode).whenTargetNamed(i.ControlFlowCustomNode.ControlFlowStorageNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(F.ExpressionWithOperatorControlFlowStorageCallNode).whenTargetNamed(i.ControlFlowCustomNode.ExpressionWithOperatorControlFlowStorageCallNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(j.LogicalExpressionFunctionNode).whenTargetNamed(i.ControlFlowCustomNode.LogicalExpressionFunctionNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(R.StringLiteralNode).whenTargetNamed(i.ControlFlowCustomNode.StringLiteralNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(G.StringLiteralControlFlowStorageCallNode).whenTargetNamed(i.ControlFlowCustomNode.StringLiteralControlFlowStorageCallNode),
                    e(o.ServiceIdentifiers.Newable__ICustomNode).toConstructor(v.BlockStatementDeadCodeInjectionNode).whenTargetNamed(d.DeadCodeInjectionCustomNode.BlockStatementDeadCodeInjectionNode),
                    e(o.ServiceIdentifiers.ICustomNodeGroup).to(u.ConsoleOutputCustomNodeGroup).whenTargetNamed(c.CustomNodeGroup.ConsoleOutputCustomNodeGroup),
                    e(o.ServiceIdentifiers.ICustomNodeGroup).to(l.DebugProtectionCustomNodeGroup).whenTargetNamed(c.CustomNodeGroup.DebugProtectionCustomNodeGroup),
                    e(o.ServiceIdentifiers.ICustomNodeGroup).to(f.DomainLockCustomNodeGroup).whenTargetNamed(c.CustomNodeGroup.DomainLockCustomNodeGroup),
                    e(o.ServiceIdentifiers.ICustomNodeGroup).to(p.SelfDefendingCustomNodeGroup).whenTargetNamed(c.CustomNodeGroup.SelfDefendingCustomNodeGroup),
                    e(o.ServiceIdentifiers.ICustomNodeGroup).to(m.StringArrayCustomNodeGroup).whenTargetNamed(c.CustomNodeGroup.StringArrayCustomNodeGroup),
                    e(o.ServiceIdentifiers.Factory__ICustomNode).toFactory(n.InversifyContainerFacade.getFactory(o.ServiceIdentifiers.ICustomNode)),
                    e(o.ServiceIdentifiers.Factory__IControlFlowCustomNode).toFactory(n.InversifyContainerFacade.getConstructorFactory(o.ServiceIdentifiers.Newable__ICustomNode, o.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, o.ServiceIdentifiers.IRandomGenerator, o.ServiceIdentifiers.IOptions)),
                    e(o.ServiceIdentifiers.Factory__IDeadCodeInjectionCustomNode).toFactory(n.InversifyContainerFacade.getConstructorFactory(o.ServiceIdentifiers.Newable__ICustomNode, o.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, o.ServiceIdentifiers.IRandomGenerator, o.ServiceIdentifiers.IOptions)),
                    e(o.ServiceIdentifiers.Factory__ICustomNodeGroup).toFactory(n.InversifyContainerFacade.getFactory(o.ServiceIdentifiers.ICustomNodeGroup))
            }))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(31),
                m = r(26),
                g = r(33),
                N = r(25),
                v = function (e) {
                    function t(e, r, n, o) {
                        var c;
                        return (0, a.default)(this, t),
                            (c = (0, i.default)(this, (0, s.default)(t).call(this, r, n, o))).appendEvent = m.ObfuscationEvent.BeforeObfuscation,
                            c.customNodeFactory = e,
                            c
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "appendCustomNodes",
                                value: function (e, t) {
                                    var r = this.getRandomStackTraceIndex(t.length);
                                    this.appendCustomNodeIfExist(p.CustomNode.ConsoleOutputDisableExpressionNode, (function (n) {
                                            N.NodeAppender.appendToOptimalBlockScope(t, e, n.getNode(), r)
                                        })),
                                        this.appendCustomNodeIfExist(p.CustomNode.NodeCallsControllerFunctionNode, (function (n) {
                                            var a = t.length ? N.NodeAppender.getOptimalBlockScope(t, r, 1) : e;
                                            N.NodeAppender.prepend(a, n.getNode())
                                        }))
                                }
                            },
                            {
                                key: "initialize",
                                value: function () {
                                    if (this.customNodes = new Map, this.options.disableConsoleOutput) {
                                        var e = this.identifierNamesGenerator.generate(),
                                            t = this.customNodeFactory(p.CustomNode.ConsoleOutputDisableExpressionNode),
                                            r = this.customNodeFactory(p.CustomNode.NodeCallsControllerFunctionNode);
                                        t.initialize(e),
                                            r.initialize(this.appendEvent, e),
                                            this.customNodes.set(p.CustomNode.ConsoleOutputDisableExpressionNode, t),
                                            this.customNodes.set(p.CustomNode.NodeCallsControllerFunctionNode, r)
                                    }
                                }
                            }
                        ]),
                        t
                }(g.AbstractCustomNodeGroup);
            d.__decorate([f.initializable(), d.__metadata("design:type", Map)], v.prototype, "customNodes", void 0),
                v = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__ICustomNode)), d.__param(1, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(3, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Function, Object, Object])], v),
                t.ConsoleOutputCustomNodeGroup = v
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(31),
                m = r(26),
                g = r(33),
                N = r(25),
                v = r(9),
                y = function (e) {
                    function t(e, r, n, o) {
                        var c;
                        return (0, a.default)(this, t),
                            (c = (0, i.default)(this, (0, s.default)(t).call(this, r, n, o))).appendEvent = m.ObfuscationEvent.BeforeObfuscation,
                            c.customNodeFactory = e,
                            c
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "appendCustomNodes",
                                value: function (e, t) {
                                    var r = this,
                                        n = this.getRandomStackTraceIndex(t.length);
                                    this.appendCustomNodeIfExist(p.CustomNode.DebugProtectionFunctionCallNode, (function (r) {
                                            N.NodeAppender.appendToOptimalBlockScope(t, e, r.getNode(), n)
                                        })),
                                        this.appendCustomNodeIfExist(p.CustomNode.DebugProtectionFunctionNode, (function (t) {
                                            N.NodeAppender.append(e, t.getNode())
                                        })),
                                        this.appendCustomNodeIfExist(p.CustomNode.DebugProtectionFunctionIntervalNode, (function (t) {
                                            var n = v.NodeGuards.isSwitchCaseNode(e) ? e.consequent.length : e.body.length,
                                                a = r.randomGenerator.getRandomInteger(0, n);
                                            N.NodeAppender.insertAtIndex(e, t.getNode(), a)
                                        })),
                                        this.appendCustomNodeIfExist(p.CustomNode.NodeCallsControllerFunctionNode, (function (r) {
                                            var a = t.length ? N.NodeAppender.getOptimalBlockScope(t, n, 1) : e;
                                            N.NodeAppender.prepend(a, r.getNode())
                                        }))
                                }
                            },
                            {
                                key: "initialize",
                                value: function () {
                                    if (this.customNodes = new Map, this.options.debugProtection) {
                                        var e = this.identifierNamesGenerator.generate(),
                                            t = this.identifierNamesGenerator.generate(),
                                            r = this.customNodeFactory(p.CustomNode.DebugProtectionFunctionNode),
                                            n = this.customNodeFactory(p.CustomNode.DebugProtectionFunctionCallNode),
                                            a = this.customNodeFactory(p.CustomNode.DebugProtectionFunctionIntervalNode),
                                            o = this.customNodeFactory(p.CustomNode.NodeCallsControllerFunctionNode);
                                        r.initialize(e),
                                            n.initialize(e, t),
                                            a.initialize(e),
                                            o.initialize(this.appendEvent, t),
                                            this.customNodes.set(p.CustomNode.DebugProtectionFunctionNode, r),
                                            this.customNodes.set(p.CustomNode.DebugProtectionFunctionCallNode, n),
                                            this.options.debugProtectionInterval && this.customNodes.set(p.CustomNode.DebugProtectionFunctionIntervalNode, a),
                                            this.customNodes.set(p.CustomNode.NodeCallsControllerFunctionNode, o)
                                    }
                                }
                            }
                        ]),
                        t
                }(g.AbstractCustomNodeGroup);
            d.__decorate([f.initializable(), d.__metadata("design:type", Map)], y.prototype, "customNodes", void 0),
                y = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__ICustomNode)), d.__param(1, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(3, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Function, Object, Object])], y),
                t.DebugProtectionCustomNodeGroup = y
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(31),
                m = r(26),
                g = r(33),
                N = r(25),
                v = function (e) {
                    function t(e, r, n, o) {
                        var c;
                        return (0, a.default)(this, t),
                            (c = (0, i.default)(this, (0, s.default)(t).call(this, r, n, o))).appendEvent = m.ObfuscationEvent.BeforeObfuscation,
                            c.customNodeFactory = e,
                            c
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "appendCustomNodes",
                                value: function (e, t) {
                                    var r = this.getRandomStackTraceIndex(t.length);
                                    this.appendCustomNodeIfExist(p.CustomNode.DomainLockNode, (function (n) {
                                            N.NodeAppender.appendToOptimalBlockScope(t, e, n.getNode(), r)
                                        })),
                                        this.appendCustomNodeIfExist(p.CustomNode.NodeCallsControllerFunctionNode, (function (n) {
                                            var a = t.length ? N.NodeAppender.getOptimalBlockScope(t, r, 1) : e;
                                            N.NodeAppender.prepend(a, n.getNode())
                                        }))
                                }
                            },
                            {
                                key: "initialize",
                                value: function () {
                                    if (this.customNodes = new Map, this.options.domainLock.length) {
                                        var e = this.identifierNamesGenerator.generate(),
                                            t = this.customNodeFactory(p.CustomNode.DomainLockNode),
                                            r = this.customNodeFactory(p.CustomNode.NodeCallsControllerFunctionNode);
                                        t.initialize(e),
                                            r.initialize(this.appendEvent, e),
                                            this.customNodes.set(p.CustomNode.DomainLockNode, t),
                                            this.customNodes.set(p.CustomNode.NodeCallsControllerFunctionNode, r)
                                    }
                                }
                            }
                        ]),
                        t
                }(g.AbstractCustomNodeGroup);
            d.__decorate([f.initializable(), d.__metadata("design:type", Map)], v.prototype, "customNodes", void 0),
                v = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__ICustomNode)), d.__param(1, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(3, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Function, Object, Object])], v),
                t.DomainLockCustomNodeGroup = v
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(31),
                m = r(26),
                g = r(33),
                N = r(25),
                v = function (e) {
                    function t(e, r, n, o) {
                        var c;
                        return (0, a.default)(this, t),
                            (c = (0, i.default)(this, (0, s.default)(t).call(this, r, n, o))).appendEvent = m.ObfuscationEvent.AfterObfuscation,
                            c.customNodeFactory = e,
                            c
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "appendCustomNodes",
                                value: function (e, t) {
                                    var r = this.getRandomStackTraceIndex(t.length);
                                    this.appendCustomNodeIfExist(p.CustomNode.SelfDefendingUnicodeNode, (function (n) {
                                            N.NodeAppender.appendToOptimalBlockScope(t, e, n.getNode(), r)
                                        })),
                                        this.appendCustomNodeIfExist(p.CustomNode.NodeCallsControllerFunctionNode, (function (n) {
                                            var a = t.length ? N.NodeAppender.getOptimalBlockScope(t, r, 1) : e;
                                            N.NodeAppender.prepend(a, n.getNode())
                                        }))
                                }
                            },
                            {
                                key: "initialize",
                                value: function () {
                                    if (this.customNodes = new Map, this.options.selfDefending) {
                                        var e = this.identifierNamesGenerator.generate(),
                                            t = this.customNodeFactory(p.CustomNode.SelfDefendingUnicodeNode),
                                            r = this.customNodeFactory(p.CustomNode.NodeCallsControllerFunctionNode);
                                        t.initialize(e),
                                            r.initialize(this.appendEvent, e),
                                            this.customNodes.set(p.CustomNode.SelfDefendingUnicodeNode, t),
                                            this.customNodes.set(p.CustomNode.NodeCallsControllerFunctionNode, r)
                                    }
                                }
                            }
                        ]),
                        t
                }(g.AbstractCustomNodeGroup);
            d.__decorate([f.initializable(), d.__metadata("design:type", Map)], v.prototype, "customNodes", void 0),
                v = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__ICustomNode)), d.__param(1, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(3, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Function, Object, Object])], v),
                t.SelfDefendingCustomNodeGroup = v
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(30)),
                o = n(r(1)),
                i = n(r(3)),
                s = n(r(6)),
                c = n(r(7)),
                d = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(10),
                m = r(31),
                g = r(26),
                N = r(33),
                v = r(25),
                y = function (e) {
                    function t(e, r, n, a, i) {
                        var d;
                        return (0, o.default)(this, t),
                            (d = (0, s.default)(this, (0, c.default)(t).call(this, n, a, i))).appendEvent = g.ObfuscationEvent.AfterObfuscation,
                            d.customNodeFactory = e,
                            d.stringArrayStorage = r,
                            d
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "appendCustomNodes",
                                value: function (e, t) {
                                    this.stringArrayStorage.getLength() && (this.appendCustomNodeIfExist(m.CustomNode.StringArrayNode, (function (t) {
                                        v.NodeAppender.prepend(e, t.getNode())
                                    })), this.appendCustomNodeIfExist(m.CustomNode.StringArrayCallsWrapper, (function (t) {
                                        v.NodeAppender.insertAtIndex(e, t.getNode(), 1)
                                    })), this.appendCustomNodeIfExist(m.CustomNode.StringArrayRotateFunctionNode, (function (t) {
                                        v.NodeAppender.insertAtIndex(e, t.getNode(), 1)
                                    })))
                                }
                            },
                            {
                                key: "initialize",
                                value: function () {
                                    if (this.customNodes = new Map, this.options.stringArray) {
                                        var e, t = this.customNodeFactory(m.CustomNode.StringArrayNode),
                                            r = this.customNodeFactory(m.CustomNode.StringArrayCallsWrapper),
                                            n = this.customNodeFactory(m.CustomNode.StringArrayRotateFunctionNode),
                                            o = this.stringArrayStorage.getStorageId().split("|"),
                                            i = (0, a.default)(o, 2),
                                            s = i[0],
                                            c = i[1];
                                        e = this.options.rotateStringArray ? this.randomGenerator.getRandomInteger(100, 500) : 0,
                                            t.initialize(this.stringArrayStorage, s, e),
                                            r.initialize(s, c),
                                            n.initialize(s, e),
                                            this.customNodes.set(m.CustomNode.StringArrayNode, t),
                                            this.customNodes.set(m.CustomNode.StringArrayCallsWrapper, r),
                                            this.options.rotateStringArray && this.customNodes.set(m.CustomNode.StringArrayRotateFunctionNode, n)
                                    }
                                }
                            }
                        ]),
                        t
                }(N.AbstractCustomNodeGroup);
            u.__decorate([p.initializable(), u.__metadata("design:type", Map)], y.prototype, "customNodes", void 0),
                y = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__ICustomNode)), u.__param(1, l.inject(f.ServiceIdentifiers.TStringArrayStorage)), u.__param(2, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), u.__param(3, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(4, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Function, Object, Object])], y),
                t.StringArrayCustomNodeGroup = y
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(15),
                m = r(14),
                g = r(11),
                N = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.operator = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = m.NodeFactory.expressionStatementNode(m.NodeFactory.functionExpressionNode([m.NodeFactory.identifierNode("x"), m.NodeFactory.identifierNode("y")], m.NodeFactory.blockStatementNode([m.NodeFactory.returnStatementNode(m.NodeFactory.binaryExpressionNode(this.operator, m.NodeFactory.identifierNode("x"), m.NodeFactory.identifierNode("y")))])));
                                    return g.NodeUtils.parentizeAst(e),
                                        [e]
                                }
                            }
                        ]),
                        t
                }(p.AbstractCustomNode);
            d.__decorate([f.initializable(), d.__metadata("design:type", String)], N.prototype, "operator", void 0),
                N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.BinaryExpressionFunctionNode = N
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GlobalVariableTemplate1 = function () {
                    return "\n        var that;\n        \n        try {\n            var getGlobal = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');');\n            \n            that = getGlobal();\n        } catch (e) {\n            that = window;\n        }\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GlobalVariableTemplate2 = function () {
                    return "\n        var getGlobal = function () {\n            var globalObject;\n        \n            try {\n                globalObject = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');')();\n            } catch (e) {\n                globalObject = window;\n            }\n            \n            return globalObject;\n        };\n        var that = getGlobal();\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(15),
                m = r(14),
                g = r(9),
                N = r(11),
                v = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t, r) {
                                    this.blockStatementBody = e,
                                        this.shuffledKeys = t,
                                        this.originalKeysIndexesInShuffledArray = r
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = this,
                                        t = this.randomGenerator.getRandomString(6),
                                        r = this.randomGenerator.getRandomString(6),
                                        n = m.NodeFactory.blockStatementNode([m.NodeFactory.variableDeclarationNode([m.NodeFactory.variableDeclaratorNode(m.NodeFactory.identifierNode(t), m.NodeFactory.callExpressionNode(m.NodeFactory.memberExpressionNode(m.NodeFactory.literalNode(this.originalKeysIndexesInShuffledArray.join("|")), m.NodeFactory.identifierNode("split")), [m.NodeFactory.literalNode("|")])), m.NodeFactory.variableDeclaratorNode(m.NodeFactory.identifierNode(r), m.NodeFactory.literalNode(0))]), m.NodeFactory.whileStatementNode(m.NodeFactory.literalNode(!0), m.NodeFactory.blockStatementNode([m.NodeFactory.switchStatementNode(m.NodeFactory.memberExpressionNode(m.NodeFactory.identifierNode(t), m.NodeFactory.updateExpressionNode("++", m.NodeFactory.identifierNode(r)), !0), this.shuffledKeys.map((function (t, r) {
                                            var n = e.blockStatementBody[t],
                                                a = [n];
                                            return g.NodeGuards.isReturnStatementNode(n) || a.push(m.NodeFactory.continueStatement()),
                                                m.NodeFactory.switchCaseNode(m.NodeFactory.literalNode(String(r)), a)
                                        }))), m.NodeFactory.breakStatement()]))]);
                                    return N.NodeUtils.parentizeAst(n),
                                        [n]
                                }
                            }
                        ]),
                        t
                }(p.AbstractCustomNode);
            d.__decorate([f.initializable(), d.__metadata("design:type", Array)], v.prototype, "blockStatementBody", void 0),
                d.__decorate([f.initializable(), d.__metadata("design:type", Array)], v.prototype, "originalKeysIndexesInShuffledArray", void 0),
                d.__decorate([f.initializable(), d.__metadata("design:type", Array)], v.prototype, "shuffledKeys", void 0),
                v = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], v),
                t.BlockStatementControlFlowFlatteningNode = v
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(30)),
                o = n(r(1)),
                i = n(r(3)),
                s = n(r(6)),
                c = n(r(7)),
                d = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(10),
                m = r(15),
                g = r(14),
                N = r(11),
                v = function (e) {
                    function t(e, r, n) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "initialize",
                                value: function (e, t) {
                                    this.blockStatementNode = e,
                                        this.deadCodeInjectionRootAstHostNode = t
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = this.randomGenerator.getMathRandom() > .5,
                                        t = this.randomGenerator.getMathRandom() > .5,
                                        r = e ? "===" : "!==",
                                        n = this.randomGenerator.getRandomString(5),
                                        o = t ? n : this.randomGenerator.getRandomString(5),
                                        i = e === t ? [this.blockStatementNode, this.deadCodeInjectionRootAstHostNode] : [this.deadCodeInjectionRootAstHostNode, this.blockStatementNode],
                                        s = (0, a.default)(i, 2),
                                        c = s[0],
                                        d = s[1],
                                        u = g.NodeFactory.blockStatementNode([g.NodeFactory.ifStatementNode(g.NodeFactory.binaryExpressionNode(r, g.NodeFactory.literalNode(n), g.NodeFactory.literalNode(o)), c, d)]);
                                    return N.NodeUtils.parentizeAst(u),
                                        [u]
                                }
                            }
                        ]),
                        t
                }(m.AbstractCustomNode);
            u.__decorate([p.initializable(), u.__metadata("design:type", Object)], v.prototype, "blockStatementNode", void 0),
                u.__decorate([p.initializable(), u.__metadata("design:type", Object)], v.prototype, "deadCodeInjectionRootAstHostNode", void 0),
                v = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], v),
                t.BlockStatementDeadCodeInjectionNode = v
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(28)),
                o = n(r(1)),
                i = n(r(3)),
                s = n(r(6)),
                c = n(r(7)),
                d = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(10),
                m = r(15),
                g = r(14),
                N = r(11),
                v = function (e) {
                    function t(e, r, n) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "initialize",
                                value: function (e, t, r, n) {
                                    this.controlFlowStorageName = e,
                                        this.controlFlowStorageKey = t,
                                        this.callee = r,
                                        this.expressionArguments = n
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = g.NodeFactory.expressionStatementNode(g.NodeFactory.callExpressionNode(g.NodeFactory.memberExpressionNode(g.NodeFactory.identifierNode(this.controlFlowStorageName), g.NodeFactory.identifierNode(this.controlFlowStorageKey)), [this.callee].concat((0, a.default)(this.expressionArguments))));
                                    return N.NodeUtils.parentizeAst(e),
                                        [e]
                                }
                            }
                        ]),
                        t
                }(m.AbstractCustomNode);
            u.__decorate([p.initializable(), u.__metadata("design:type", Object)], v.prototype, "callee", void 0),
                u.__decorate([p.initializable(), u.__metadata("design:type", String)], v.prototype, "controlFlowStorageKey", void 0),
                u.__decorate([p.initializable(), u.__metadata("design:type", String)], v.prototype, "controlFlowStorageName", void 0),
                u.__decorate([p.initializable(), u.__metadata("design:type", Array)], v.prototype, "expressionArguments", void 0),
                v = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], v),
                t.CallExpressionControlFlowStorageCallNode = v
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(15),
                m = r(14),
                g = r(11),
                N = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.expressionArguments = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    for (var e = m.NodeFactory.identifierNode("callee"), t = [], r = this.expressionArguments.length, n = 0; n < r; n++) t.push(m.NodeFactory.identifierNode("param".concat(n + 1)));
                                    var a = m.NodeFactory.expressionStatementNode(m.NodeFactory.functionExpressionNode([e].concat(t), m.NodeFactory.blockStatementNode([m.NodeFactory.returnStatementNode(m.NodeFactory.callExpressionNode(e, t))])));
                                    return g.NodeUtils.parentizeAst(a),
                                        [a]
                                }
                            }
                        ]),
                        t
                }(p.AbstractCustomNode);
            d.__decorate([f.initializable(), d.__metadata("design:type", Array)], N.prototype, "expressionArguments", void 0),
                N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.CallExpressionFunctionNode = N
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(30)),
                o = n(r(1)),
                i = n(r(3)),
                s = n(r(6)),
                c = n(r(7)),
                d = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(10),
                m = r(15),
                g = r(14),
                N = r(9),
                v = r(11),
                y = function (e) {
                    function t(e, r, n) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.controlFlowStorage = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = Array.from(this.controlFlowStorage.getStorage()).map((function (e) {
                                            var t = (0, a.default)(e, 2),
                                                r = t[0],
                                                n = t[1].getNode()[0];
                                            if (!N.NodeGuards.isExpressionStatementNode(n)) throw new Error("Function node for control flow storage object should be passed inside the `ExpressionStatement` node!");
                                            return g.NodeFactory.propertyNode(g.NodeFactory.identifierNode(r), n.expression)
                                        })),
                                        t = g.NodeFactory.variableDeclarationNode([g.NodeFactory.variableDeclaratorNode(g.NodeFactory.identifierNode(this.controlFlowStorage.getStorageId()), g.NodeFactory.objectExpressionNode(e))]);
                                    return [t = v.NodeUtils.parentizeAst(t)]
                                }
                            }
                        ]),
                        t
                }(m.AbstractCustomNode);
            u.__decorate([p.initializable(), u.__metadata("design:type", Object)], y.prototype, "controlFlowStorage", void 0),
                y = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], y),
                t.ControlFlowStorageNode = y
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(23),
                m = r(103),
                g = r(45),
                N = r(10),
                v = r(15),
                y = r(11),
                _ = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.callsControllerFunctionName = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return y.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    var e = this.options.target !== p.ObfuscationTarget.BrowserNoEval ? this.getGlobalVariableTemplate() : g.GlobalVariableNoEvalTemplate();
                                    return f.
                                    default(m.ConsoleOutputDisableExpressionTemplate(), {
                                        consoleLogDisableFunctionName: this.identifierNamesGenerator.generate(),
                                        globalVariableTemplate: e,
                                        singleNodeCallControllerFunctionName: this.callsControllerFunctionName
                                    })
                                }
                            }
                        ]),
                        t
                }(v.AbstractCustomNode);
            d.__decorate([N.initializable(), d.__metadata("design:type", String)], _.prototype, "callsControllerFunctionName", void 0),
                _ = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], _),
                t.ConsoleOutputDisableExpressionNode = _
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ConsoleOutputDisableExpressionTemplate = function () {
                    return "\n        var {consoleLogDisableFunctionName} = {singleNodeCallControllerFunctionName}(this, function () {\n            var func = function () {};\n            \n            {globalVariableTemplate}\n                        \n            if (!that.console) {\n                that.console = (function (func){\n                    var c = {};\n                    \n                    c.log = func;\n                    c.warn = func;\n                    c.debug = func;\n                    c.info = func;\n                    c.error = func;\n                    c.exception = func;\n                    c.trace = func;\n                    \n                    return c;\n                })(func);\n            } else {\n                that.console.log = func;\n                that.console.warn = func;\n                that.console.debug = func;\n                that.console.info = func;\n                that.console.error = func;\n                that.console.exception = func;\n                that.console.trace = func;\n            }\n        });\n        \n        {consoleLogDisableFunctionName}();\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(10),
                m = r(105),
                g = r(15),
                N = r(11),
                v = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t) {
                                    this.debugProtectionFunctionName = e,
                                        this.callsControllerFunctionName = t
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return N.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    return f.
                                    default(m.DebugProtectionFunctionCallTemplate(), {
                                        debugProtectionFunctionName: this.debugProtectionFunctionName,
                                        singleNodeCallControllerFunctionName: this.callsControllerFunctionName
                                    })
                                }
                            }
                        ]),
                        t
                }(g.AbstractCustomNode);
            d.__decorate([p.initializable(), d.__metadata("design:type", String)], v.prototype, "callsControllerFunctionName", void 0),
                d.__decorate([p.initializable(), d.__metadata("design:type", String)], v.prototype, "debugProtectionFunctionName", void 0),
                v = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], v),
                t.DebugProtectionFunctionCallNode = v
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DebugProtectionFunctionCallTemplate = function () {
                    return "\n        (function () {\n            {singleNodeCallControllerFunctionName}(this, function () {\n                var regExp1 = new RegExp('function *\\\\( *\\\\)');\n                var regExp2 = new RegExp('\\\\+\\\\+ *\\(?:_0x(?:[a-f0-9]){4,6}|(?:\\\\b|\\\\d)[a-z0-9]{1,4}(?:\\\\b|\\\\d)\\)', 'i');\n       \n                var result = {debugProtectionFunctionName}('init');\n                \n                if (!regExp1.test(result + 'chain') || !regExp2.test(result + 'input')) {\n                    result('0');\n                } else {\n                    {debugProtectionFunctionName}();\n                }\n            })();\n        })();\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(10),
                m = r(107),
                g = r(15),
                N = r(11),
                v = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.debugProtectionFunctionName = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return N.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    return f.
                                    default(m.DebugProtectionFunctionIntervalTemplate(), {
                                        debugProtectionFunctionName: this.debugProtectionFunctionName
                                    })
                                }
                            }
                        ]),
                        t
                }(g.AbstractCustomNode);
            d.__decorate([p.initializable(), d.__metadata("design:type", String)], v.prototype, "debugProtectionFunctionName", void 0),
                v = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], v),
                t.DebugProtectionFunctionIntervalNode = v
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DebugProtectionFunctionIntervalTemplate = function () {
                    return "\n        setInterval(function () {\n            {debugProtectionFunctionName}();\n        }, 4000);\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(23),
                m = r(10),
                g = r(109),
                N = r(110),
                v = r(111),
                y = r(15),
                _ = r(11),
                h = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.debugProtectionFunctionName = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return _.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    var e = this.options.target !== p.ObfuscationTarget.BrowserNoEval ? g.DebuggerTemplate() : N.DebuggerTemplateNoEval();
                                    return f.
                                    default(v.DebugProtectionFunctionTemplate(), {
                                        debuggerTemplate: e,
                                        debugProtectionFunctionName: this.debugProtectionFunctionName
                                    })
                                }
                            }
                        ]),
                        t
                }(y.AbstractCustomNode);
            d.__decorate([m.initializable(), d.__metadata("design:type", String)], h.prototype, "debugProtectionFunctionName", void 0),
                h = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], h),
                t.DebugProtectionFunctionNode = h
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DebuggerTemplate = function () {
                    return "\n        if (typeof counter === 'string') {\n            return (function (arg) {}.constructor('while (true) {}').apply('counter'));\n        } else {\n            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {\n                (function () {return true;}.constructor('debu' + 'gger').call('action'));\n            } else {\n                (function () {return false;}.constructor('debu' + 'gger').apply('stateObject'));\n            }\n            \n        }\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DebuggerTemplateNoEval = function () {
                    return "\n        if (typeof counter === 'string') {\n            var func = function () {\n                while (true) {}\n            };\n            \n            return func();\n        } else {\n            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {\n                debugger;\n            } else {\n                debugger;\n            }\n            \n        }\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DebugProtectionFunctionTemplate = function () {
                    return "\n        function {debugProtectionFunctionName} (ret) {\n            function debuggerProtection (counter) {\n            \n                {debuggerTemplate}\n                \n                debuggerProtection(++counter);\n            }\n            \n            try {\n                if (ret) {\n                    return debuggerProtection;\n                } else {\n                    debuggerProtection(0);\n                }\n            } catch (y) {}\n        }\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(30)),
                o = n(r(1)),
                i = n(r(3)),
                s = n(r(6)),
                c = n(r(7)),
                d = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importDefault(r(18)),
                m = r(23),
                g = r(10),
                N = r(113),
                v = r(45),
                y = r(15),
                _ = r(11),
                h = function (e) {
                    function t(e, r, n, a) {
                        var i;
                        return (0, o.default)(this, t),
                            (i = (0, s.default)(this, (0, c.default)(t).call(this, e, r, a))).cryptUtils = n,
                            i
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.callsControllerFunctionName = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return _.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    var e = this.options.domainLock.join(";"),
                                        t = this.cryptUtils.hideString(e, 3 * e.length),
                                        r = (0, a.default)(t, 2),
                                        n = r[0],
                                        o = r[1],
                                        i = this.options.target !== m.ObfuscationTarget.BrowserNoEval ? this.getGlobalVariableTemplate() : v.GlobalVariableNoEvalTemplate();
                                    return p.
                                    default(N.DomainLockNodeTemplate(), {
                                        domainLockFunctionName: this.identifierNamesGenerator.generate(),
                                        diff: o,
                                        domains: n,
                                        globalVariableTemplate: i,
                                        singleNodeCallControllerFunctionName: this.callsControllerFunctionName
                                    })
                                }
                            }
                        ]),
                        t
                }(y.AbstractCustomNode);
            u.__decorate([g.initializable(), u.__metadata("design:type", String)], h.prototype, "callsControllerFunctionName", void 0),
                h = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.ICryptUtils)), u.__param(3, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object, Object])], h),
                t.DomainLockNode = h
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DomainLockNodeTemplate = function () {
                    return '\n        var {domainLockFunctionName} = {singleNodeCallControllerFunctionName}(this, function () {\n            \n            {globalVariableTemplate}\n            \n            var func = function () {\n                return {\n                    key: \'item\',\n                    value: \'attribute\',\n                    getAttribute: function () {\n                        for (var i = 0; i < 1000; i--) {\n                            var isPositive = i > 0;\n                            \n                            switch (isPositive) {\n                                case true:\n                                    return this.item + \'_\' + this.value + \'_\' + i;\n                                default:\n                                    this.item + \'_\' + this.value;\n                            }\n                        }\n                    }()\n                };\n            };\n                        \n            var regExp = new RegExp("[{diff}]", "g");\n            var domains = "{domains}".replace(regExp, "").split(";");\n            var document;\n            var domain;\n            var location;\n            var hostname;\n\n            for (var d in that) {\n                if (d.length == 8 && d.charCodeAt(7) == 116 && d.charCodeAt(5) == 101 && d.charCodeAt(3) == 117 && d.charCodeAt(0) == 100) {\n                    document = d;\n                \n                    break;\n                }\n            }\n\n            for (var d1 in that[document]) {\n                if (d1.length == 6 && d1.charCodeAt(5) == 110 && d1.charCodeAt(0) == 100) {\n                    domain = d1;\n                    \n                    break;\n                }\n            }\n\n            if (!("~" > domain)) {\n                for (var d2 in that[document]) {\n                    if (d2.length == 8 && d2.charCodeAt(7) == 110 && d2.charCodeAt(0) == 108) {\n                        location = d2;\n                        \n                        break;\n                    }\n                }\n\n                for (var d3 in that[document][location]) {\n                    if (d3.length == 8 && d3.charCodeAt(7) == 101 && d3.charCodeAt(0) == 104) {\n                        hostname = d3;\n                        \n                        break;\n                    }\n                }\n            }\n            \n            if (!document || !that[document]) {\n                return;\n            }\n            \n            var documentDomain = that[document][domain];\n            var documentLocationHostName = !!that[document][location] && that[document][location][hostname];\n            var currentDomain = documentDomain || documentLocationHostName;\n          \n            if (!currentDomain) {\n                return;\n            }\n          \n            var ok = false;\n                        \n            for (var i = 0; i < domains.length; i++) {\n                var domain = domains[i];\n                var position = currentDomain.length - domain.length;\n                var lastIndex = currentDomain.indexOf(domain, position);\n                var endsWith = lastIndex !== -1 && lastIndex === position;\n                \n                if (endsWith) {\n                    if (currentDomain.length == domain.length || domain.indexOf(".") === 0) {\n                        ok = true;\n                    }\n                }\n            }\n               \n            if (!ok) {\n                data;\n            } else {\n                return;\n            }\n            \n            func();\n        });\n\n        {domainLockFunctionName}();\n    '
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(15),
                m = r(14),
                g = r(11),
                N = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t, r, n) {
                                    this.controlFlowStorageName = e,
                                        this.controlFlowStorageKey = t,
                                        this.leftValue = r,
                                        this.rightValue = n
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = m.NodeFactory.expressionStatementNode(m.NodeFactory.callExpressionNode(m.NodeFactory.memberExpressionNode(m.NodeFactory.identifierNode(this.controlFlowStorageName), m.NodeFactory.identifierNode(this.controlFlowStorageKey)), [this.leftValue, this.rightValue]));
                                    return g.NodeUtils.parentizeAst(e),
                                        [e]
                                }
                            }
                        ]),
                        t
                }(p.AbstractCustomNode);
            d.__decorate([f.initializable(), d.__metadata("design:type", String)], N.prototype, "controlFlowStorageKey", void 0),
                d.__decorate([f.initializable(), d.__metadata("design:type", String)], N.prototype, "controlFlowStorageName", void 0),
                d.__decorate([f.initializable(), d.__metadata("design:type", Object)], N.prototype, "leftValue", void 0),
                d.__decorate([f.initializable(), d.__metadata("design:type", Object)], N.prototype, "rightValue", void 0),
                N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.ExpressionWithOperatorControlFlowStorageCallNode = N
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(15),
                m = r(14),
                g = r(11),
                N = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.operator = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = m.NodeFactory.expressionStatementNode(m.NodeFactory.functionExpressionNode([m.NodeFactory.identifierNode("x"), m.NodeFactory.identifierNode("y")], m.NodeFactory.blockStatementNode([m.NodeFactory.returnStatementNode(m.NodeFactory.logicalExpressionNode(this.operator, m.NodeFactory.identifierNode("x"), m.NodeFactory.identifierNode("y")))])));
                                    return g.NodeUtils.parentizeAst(e),
                                        [e]
                                }
                            }
                        ]),
                        t
                }(p.AbstractCustomNode);
            d.__decorate([f.initializable(), d.__metadata("design:type", String)], N.prototype, "operator", void 0),
                N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.LogicalExpressionFunctionNode = N
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(26),
                m = r(10),
                g = r(117),
                N = r(38),
                v = r(15),
                y = r(32),
                _ = r(11),
                h = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t) {
                                    this.appendEvent = e,
                                        this.callsControllerFunctionName = t
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return _.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    return this.appendEvent === p.ObfuscationEvent.AfterObfuscation ? y.JavaScriptObfuscator.obfuscate(f.default(g.SingleNodeCallControllerTemplate(), {
                                        singleNodeCallControllerFunctionName: this.callsControllerFunctionName
                                    }), Object.assign(Object.assign({},
                                        N.NO_ADDITIONAL_NODES_PRESET), {
                                        identifierNamesGenerator: this.options.identifierNamesGenerator,
                                        seed: this.options.seed
                                    })).getObfuscatedCode() : f.
                                    default(g.SingleNodeCallControllerTemplate(), {
                                        singleNodeCallControllerFunctionName: this.callsControllerFunctionName
                                    })
                                }
                            }
                        ]),
                        t
                }(v.AbstractCustomNode);
            d.__decorate([m.initializable(), d.__metadata("design:type", String)], h.prototype, "callsControllerFunctionName", void 0),
                d.__decorate([m.initializable(), d.__metadata("design:type", String)], h.prototype, "appendEvent", void 0),
                h = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], h),
                t.NodeCallsControllerFunctionNode = h
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SingleNodeCallControllerTemplate = function () {
                    return "\n        var {singleNodeCallControllerFunctionName} = (function(){\n            var firstCall = true;\n            \n            return function (context, fn){\n                var rfn = firstCall ? function(){\n                    if(fn){\n                        var res = fn.apply(context, arguments);\n                        fn = null;\n                        return res;\n                    }\n                } : function(){}\n                \n                firstCall = false;\n                \n                return rfn;\n            }\n        })();\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(10),
                m = r(38),
                g = r(119),
                N = r(15),
                v = r(32),
                y = r(11),
                _ = function (e) {
                    function t(e, r, n, o) {
                        var c;
                        return (0, a.default)(this, t),
                            (c = (0, i.default)(this, (0, s.default)(t).call(this, e, r, o))).escapeSequenceEncoder = n,
                            c
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.callsControllerFunctionName = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return y.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    return v.JavaScriptObfuscator.obfuscate(f.default(g.SelfDefendingTemplate(this.escapeSequenceEncoder), {
                                        selfDefendingFunctionName: this.identifierNamesGenerator.generate(),
                                        singleNodeCallControllerFunctionName: this.callsControllerFunctionName
                                    }), Object.assign(Object.assign({},
                                        m.NO_ADDITIONAL_NODES_PRESET), {
                                        identifierNamesGenerator: this.options.identifierNamesGenerator,
                                        seed: this.options.seed,
                                        unicodeEscapeSequence: !0
                                    })).getObfuscatedCode()
                                }
                            }
                        ]),
                        t
                }(N.AbstractCustomNode);
            d.__decorate([p.initializable(), d.__metadata("design:type", String)], _.prototype, "callsControllerFunctionName", void 0),
                _ = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IEscapeSequenceEncoder)), d.__param(3, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object, Object])], _),
                t.SelfDefendingUnicodeNode = _
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SelfDefendingTemplate = function (e) {
                    return "\n        var {selfDefendingFunctionName} = {singleNodeCallControllerFunctionName}(this, function () {\n            var func1 = function(){return 'dev';},\n                func2 = function () {\n                    return 'window';\n                };\n                \n            var test1 = function () {\n                var regExp = new RegExp('".concat(e.encode("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}", !0), "');\n                \n                return !regExp.test(func1.toString());\n            };\n            \n            var test2 = function () {\n                var regExp = new RegExp('").concat(e.encode("(\\\\[x|u](\\w){2,4})+", !0), "');\n                \n                return regExp.test(func2.toString());\n            };\n            \n            var recursiveFunc1 = function (string) {\n                var i = ~-1 >> 1 + 255 % 0;\n                                \n                if (string.indexOf('i' === i)) {\n                    recursiveFunc2(string)\n                }\n            };\n            \n            var recursiveFunc2 = function (string) {\n                var i = ~-4 >> 1 + 255 % 0;\n                \n                if (string.indexOf((true+\"\")[3]) !== i) {\n                    recursiveFunc1(string)\n                }\n            };\n            \n            if (!test1()) {\n                if (!test2()) {\n                    recursiveFunc1('indеxOf');\n                } else {\n                    recursiveFunc1('indexOf');\n                }\n            } else {\n                recursiveFunc1('indеxOf');\n            }\n        })\n        \n        {selfDefendingFunctionName}();\n    ")
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(23),
                m = r(37),
                g = r(10),
                N = r(38),
                v = r(121),
                y = r(45),
                _ = r(122),
                h = r(123),
                b = r(124),
                S = r(125),
                I = r(126),
                C = r(15),
                O = r(32),
                F = r(11),
                j = function (e) {
                    function t(e, r, n, o) {
                        var c;
                        return (0, a.default)(this, t),
                            (c = (0, i.default)(this, (0, s.default)(t).call(this, e, r, o))).escapeSequenceEncoder = n,
                            c
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t) {
                                    this.stringArrayName = e,
                                        this.stringArrayCallsWrapperName = t
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return F.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    var e = this.getDecodeStringArrayTemplate();
                                    return O.JavaScriptObfuscator.obfuscate(f.default(S.StringArrayCallsWrapperTemplate(), {
                                        decodeNodeTemplate: e,
                                        stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
                                        stringArrayName: this.stringArrayName
                                    }), Object.assign(Object.assign({},
                                        N.NO_ADDITIONAL_NODES_PRESET), {
                                        identifierNamesGenerator: this.options.identifierNamesGenerator,
                                        seed: this.options.seed
                                    })).getObfuscatedCode()
                                }
                            },
                            {
                                key: "getDecodeStringArrayTemplate",
                                value: function () {
                                    var e = this.options.target !== p.ObfuscationTarget.BrowserNoEval ? this.getGlobalVariableTemplate() : y.GlobalVariableNoEvalTemplate(),
                                        t = f.
                                    default(v.AtobTemplate(), {
                                            globalVariableTemplate: e
                                        }),
                                        r = "",
                                        n = "";
                                    switch (this.options.selfDefending && (n = f.default(h.SelfDefendingTemplate(this.randomGenerator, this.escapeSequenceEncoder), {
                                        stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
                                        stringArrayName: this.stringArrayName
                                    })), this.options.stringArrayEncoding) {
                                        case m.StringArrayEncoding.Rc4:
                                            r = f.
                                            default(I.StringArrayRc4DecodeNodeTemplate(this.randomGenerator), {
                                                atobPolyfill: t,
                                                rc4Polyfill: _.Rc4Template(),
                                                selfDefendingCode: n,
                                                stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
                                            });
                                            break;
                                        case m.StringArrayEncoding.Base64:
                                            r = f.
                                            default(b.StringArrayBase64DecodeNodeTemplate(this.randomGenerator), {
                                                atobPolyfill: t,
                                                selfDefendingCode: n,
                                                stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
                                            })
                                    }
                                    return r
                                }
                            }
                        ]),
                        t
                }(C.AbstractCustomNode);
            d.__decorate([g.initializable(), d.__metadata("design:type", String)], j.prototype, "stringArrayName", void 0),
                d.__decorate([g.initializable(), d.__metadata("design:type", String)], j.prototype, "stringArrayCallsWrapperName", void 0),
                j = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IEscapeSequenceEncoder)), d.__param(3, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object, Object])], j),
                t.StringArrayCallsWrapper = j
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.AtobTemplate = function () {
                    return "\n        (function () {\n            {globalVariableTemplate}\n            \n            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\n            that.atob || (\n                that.atob = function(input) {\n                    var str = String(input).replace(/=+$/, '');\n                    for (\n                        var bc = 0, bs, buffer, idx = 0, output = '';\n                        buffer = str.charAt(idx++);\n                        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n                            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n                    ) {\n                        buffer = chars.indexOf(buffer);\n                    }\n                return output;\n            });\n        })();\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.Rc4Template = function () {
                    return "\n        var rc4 = function (str, key) {\n            var s = [], j = 0, x, res = '', newStr = '';\n           \n            str = atob(str);\n                \n            for (var k = 0, length = str.length; k < length; k++) {\n                newStr += '%' + ('00' + str.charCodeAt(k).toString(16)).slice(-2);\n            }\n        \n            str = decodeURIComponent(newStr);\n                    \t        \n\t        for (var i = 0; i < 256; i++) {\n                s[i] = i;\n            }\n \n            for (i = 0; i < 256; i++) {\n                j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;\n                x = s[i];\n                s[i] = s[j];\n                s[j] = x;\n            }\n            \n            i = 0;\n            j = 0;\n            \n            for (var y = 0; y < str.length; y++) {\n                i = (i + 1) % 256;\n                j = (j + s[i]) % 256;\n                x = s[i];\n                s[i] = s[j];\n                s[j] = x;\n                res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);\n            }\n                      \n            return res;\n        }\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SelfDefendingTemplate = function (e, t) {
                    var r = e.getRandomString(6),
                        n = e.getRandomString(6),
                        a = e.getRandomString(6),
                        o = e.getRandomString(6),
                        i = e.getRandomString(6),
                        s = e.getRandomString(6),
                        c = e.getRandomString(6),
                        d = e.getRandomString(6),
                        u = e.getRandomString(6);
                    return "\n        var StatesClass = function (".concat(r, ") {\n            this.").concat(r, " = ").concat(r, ";\n            this.").concat(n, " = [1, 0, 0];\n            this.").concat(a, " = function(){return 'newState';};\n            this.").concat(o, " = '").concat(t.encode("\\w+ *\\(\\) *{\\w+ *", !0), "';\n            this.").concat(i, " = '").concat(t.encode("['|\"].+['|\"];? *}", !0), "';\n        };\n        \n        StatesClass.prototype.").concat(s, " = function () {\n            var regExp = new RegExp(this.").concat(o, " + this.").concat(i, ");\n            var expression = regExp.test(this.").concat(a, ".toString())\n                ? --this.").concat(n, "[1]\n                : --this.").concat(n, "[0];\n            \n            return this.").concat(c, "(expression);\n        };\n        \n        StatesClass.prototype.").concat(c, " = function (").concat(u, ") {\n            if (!Boolean(~").concat(u, ")) {\n                return ").concat(u, ";\n            }\n            \n            return this.").concat(d, "(this.").concat(r, ");\n        };\n\n        StatesClass.prototype.").concat(d, " = function (").concat(r, ") {\n            for (var i = 0, len = this.").concat(n, ".length; i < len; i++) {\n                this.").concat(n, ".push(Math.round(Math.random()));\n                len = this.").concat(n, ".length;\n            }\n            \n            return ").concat(r, "(this.").concat(n, "[0]);\n        };\n\n        new StatesClass({stringArrayCallsWrapperName}).").concat(s, "();\n    ")
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StringArrayBase64DecodeNodeTemplate = function (e) {
                    var t = e.getRandomString(6),
                        r = e.getRandomString(6),
                        n = e.getRandomString(6);
                    return "\n        if ({stringArrayCallsWrapperName}.".concat(t, " === undefined) {\n            {atobPolyfill}\n            \n            {stringArrayCallsWrapperName}.").concat(r, " = function (str) {\n                var string = atob(str);\n                var newStringChars = [];\n                \n                for (var i = 0, length = string.length; i < length; i++) {\n                    newStringChars += '%' + ('00' + string.charCodeAt(i).toString(16)).slice(-2);\n                }\n                \n                return decodeURIComponent(newStringChars);\n            };\n            \n            {stringArrayCallsWrapperName}.").concat(n, " = {};\n            \n            {stringArrayCallsWrapperName}.").concat(t, " = true;\n        }\n                  \n        var cachedValue = {stringArrayCallsWrapperName}.").concat(n, "[index];\n                        \n        if (cachedValue === undefined) {\n            {selfDefendingCode}\n            \n            value = {stringArrayCallsWrapperName}.").concat(r, "(value);\n            {stringArrayCallsWrapperName}.").concat(n, "[index] = value;\n        } else {\n            value = cachedValue;\n        }\n    ")
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StringArrayCallsWrapperTemplate = function () {
                    return "\n        var {stringArrayCallsWrapperName} = function (index, key) {\n            index = index - 0;\n            \n            var value = {stringArrayName}[index];\n            \n            {decodeNodeTemplate}\n        \n            return value;\n        };\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StringArrayRc4DecodeNodeTemplate = function (e) {
                    var t = e.getRandomString(6),
                        r = e.getRandomString(6),
                        n = e.getRandomString(6),
                        a = e.getRandomString(6);
                    return "\n        if ({stringArrayCallsWrapperName}.".concat(t, " === undefined) {\n            {atobPolyfill}\n            \n            {rc4Polyfill}\n            {stringArrayCallsWrapperName}.").concat(r, " = rc4;\n            \n            {stringArrayCallsWrapperName}.").concat(n, " = {};\n            \n            {stringArrayCallsWrapperName}.").concat(t, " = true;\n        }\n  \n        var cachedValue = {stringArrayCallsWrapperName}.").concat(n, "[index];\n\n        if (cachedValue === undefined) {\n            if ({stringArrayCallsWrapperName}.").concat(a, " === undefined) {\n                {selfDefendingCode}\n                \n                {stringArrayCallsWrapperName}.").concat(a, " = true;\n            }\n            \n            value = {stringArrayCallsWrapperName}.").concat(r, "(value, key);\n            {stringArrayCallsWrapperName}.").concat(n, "[index] = value;\n        } else {\n            value = cachedValue;\n        }\n    ")
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(39)),
                d = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importDefault(r(18)),
                m = r(10),
                g = r(128),
                N = r(15),
                v = r(11),
                y = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, d.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t, r) {
                                    this.stringArrayStorage = e,
                                        this.stringArrayName = t,
                                        this.stringArrayRotateValue = r
                                }
                            },
                            {
                                key: "getNode",
                                value: function () {
                                    return this.stringArrayStorage.rotateArray(this.stringArrayRotateValue),
                                        (0, c.default)((0, s.default)(t.prototype), "getNode", this).call(this)
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return v.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    // console.log(this.stringArrayStorage.toString())
                                    // console.log(bh_obj1)
                                    // console.log(789)
                                    return p.
                                    default(g.StringArrayTemplate(), {
                                        stringArrayName: this.stringArrayName,
                                        stringArray: this.stringArrayStorage.toString()
                                    })
                                }
                            }
                        ]),
                        t
                }(N.AbstractCustomNode);
            u.__decorate([m.initializable(), u.__metadata("design:type", Object)], y.prototype, "stringArrayStorage", void 0),
                u.__decorate([m.initializable(), u.__metadata("design:type", String)], y.prototype, "stringArrayName", void 0),
                u.__decorate([m.initializable(), u.__metadata("design:type", Number)], y.prototype, "stringArrayRotateValue", void 0),
                y = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], y),
                t.StringArrayNode = y
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StringArrayTemplate = function () {
                    return "\n        var {stringArrayName} = [{stringArray}];\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importDefault(r(18)),
                p = r(10),
                m = r(38),
                g = r(130),
                N = r(131),
                v = r(15),
                y = r(32),
                _ = r(11),
                h = r(40),
                b = function (e) {
                    function t(e, r, n, o) {
                        var c;
                        return (0, a.default)(this, t),
                            (c = (0, i.default)(this, (0, s.default)(t).call(this, e, r, o))).escapeSequenceEncoder = n,
                            c
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t) {
                                    this.stringArrayName = e,
                                        this.stringArrayRotateValue = t
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return _.NodeUtils.convertCodeToStructure(this.getTemplate())
                                }
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    var e = this.identifierNamesGenerator.generate(),
                                        t = this.identifierNamesGenerator.generate(),
                                        r = "";
                                    return r = this.options.selfDefending ? f.
                                    default(g.SelfDefendingTemplate(this.escapeSequenceEncoder), {
                                            timesName: e,
                                            whileFunctionName: t
                                        }): "".concat(t, "(++").concat(e, ")"),
                                        y.JavaScriptObfuscator.obfuscate(f.default(N.StringArrayRotateFunctionTemplate(), {
                                            code: r,
                                            timesName: e,
                                            stringArrayName: this.stringArrayName,
                                            stringArrayRotateValue: h.NumberUtils.toHex(this.stringArrayRotateValue),
                                            whileFunctionName: t
                                        }), Object.assign(Object.assign({},
                                            m.NO_ADDITIONAL_NODES_PRESET), {
                                            identifierNamesGenerator: this.options.identifierNamesGenerator,
                                            seed: this.options.seed
                                        })).getObfuscatedCode()
                                }
                            }
                        ]),
                        t
                }(v.AbstractCustomNode);
            d.__decorate([p.initializable(), d.__metadata("design:type", String)], b.prototype, "stringArrayName", void 0),
                d.__decorate([p.initializable(), d.__metadata("design:type", Number)], b.prototype, "stringArrayRotateValue", void 0),
                b = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IEscapeSequenceEncoder)), d.__param(3, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object, Object])], b),
                t.StringArrayRotateFunctionNode = b
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SelfDefendingTemplate = function (e) {
                    return "\n        var selfDefendingFunc = function () {\n            var object = {\n                data: {\n                    key: 'cookie',\n                    value: 'timeout'\n                },\n                setCookie: function (options, name, value, document) {\n                    document = document || {};\n                    \n                    var updatedCookie = name + \"=\" + value;\n\n                    var i = 0;\n                                                            \n                    for (var i = 0, len = options.length; i < len; i++) {\n                        var propName = options[i];\n                                     \n                        updatedCookie += \"; \" + propName;\n                        \n                        var propValue = options[propName];\n                        \n                        options.push(propValue);\n                        len = options.length;\n                                                                        \n                        if (propValue !== true) {\n                            updatedCookie += \"=\" + propValue;\n                        }\n                    }\n\n                    document['cookie'] = updatedCookie;\n                },\n                removeCookie: function(){return 'dev';},\n                getCookie: function (document, name) {\n                    document = document || function (value) { return value };\n                    var matches = document(new RegExp(\n                        \"(?:^|; )\" + name.replace(/([.$?*|{}()[]\\/+^])/g, '\\$1') + \"=([^;]*)\"\n                    ));\n                    \n                    var func = function (param1, param2) {\n                        param1(++param2);\n                    };\n                    \n                    func({whileFunctionName}, {timesName});\n                                        \n                    return matches ? decodeURIComponent(matches[1]) : undefined;\n                }\n            };\n            \n            var test1 = function () {\n                var regExp = new RegExp('".concat(e.encode("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}", !0), "');\n                \n                return regExp.test(object.removeCookie.toString());\n            };\n            \n            object['updateCookie'] = test1;\n            \n            var cookie = '';\n            var result = object['updateCookie']();\n                                    \n            if (!result) {\n                object['setCookie'](['*'], 'counter', 1);\n            } else if (result) {\n                cookie = object['getCookie'](null, 'counter');\n            } else {\n                object['removeCookie']();\n            }\n        };\n        \n        selfDefendingFunc();\n    ")
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StringArrayRotateFunctionTemplate = function () {
                    return "\n        (function (array, {timesName}) {\n            var {whileFunctionName} = function (times) {\n                while (--times) {\n                    array['push'](array['shift']());\n                }\n            };\n            \n            {code}\n        })({stringArrayName}, 0x{stringArrayRotateValue});\n    "
                }
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(15),
                m = r(14),
                g = r(11),
                N = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e, t) {
                                    this.controlFlowStorageName = e,
                                        this.controlFlowStorageKey = t
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    var e = m.NodeFactory.expressionStatementNode(m.NodeFactory.memberExpressionNode(m.NodeFactory.identifierNode(this.controlFlowStorageName), m.NodeFactory.identifierNode(this.controlFlowStorageKey)));
                                    return g.NodeUtils.parentizeAst(e),
                                        [e]
                                }
                            }
                        ]),
                        t
                }(p.AbstractCustomNode);
            d.__decorate([f.initializable(), d.__metadata("design:type", String)], N.prototype, "controlFlowStorageKey", void 0),
                d.__decorate([f.initializable(), d.__metadata("design:type", String)], N.prototype, "controlFlowStorageName", void 0),
                N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.StringLiteralControlFlowStorageCallNode = N
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(10),
                p = r(15),
                m = r(14),
                g = function (e) {
                    function t(e, r, n) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r, n))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "initialize",
                                value: function (e) {
                                    this.literalValue = e
                                }
                            },
                            {
                                key: "getNodeStructure",
                                value: function () {
                                    return [m.NodeFactory.expressionStatementNode(m.NodeFactory.literalNode(this.literalValue))]
                                }
                            }
                        ]),
                        t
                }(p.AbstractCustomNode);
            d.__decorate([f.initializable(), d.__metadata("design:type", String)], g.prototype, "literalValue", void 0),
                g = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], g),
                t.StringLiteralNode = g
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2);
            t.finalizingTransformersModule = new n.ContainerModule((function (e) {}))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2),
                a = r(5),
                o = r(35),
                i = r(136),
                s = r(137);
            t.generatorsModule = new n.ContainerModule((function (e) {
                e(a.ServiceIdentifiers.IIdentifierNamesGenerator).to(i.HexadecimalIdentifierNamesGenerator).inSingletonScope().whenTargetNamed(o.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator),
                    e(a.ServiceIdentifiers.IIdentifierNamesGenerator).to(s.MangledIdentifierNamesGenerator).inSingletonScope().whenTargetNamed(o.IdentifierNamesGenerator.MangledIdentifierNamesGenerator),
                    e(a.ServiceIdentifiers.Factory__IIdentifierNamesGenerator).toFactory((function (e) {
                        var t = null;
                        return function (r) {
                            if (t) return t;
                            var n;
                            switch (r.identifierNamesGenerator) {
                                case o.IdentifierNamesGenerator.MangledIdentifierNamesGenerator:
                                    n = e.container.getNamed(a.ServiceIdentifiers.IIdentifierNamesGenerator, o.IdentifierNamesGenerator.MangledIdentifierNamesGenerator);
                                    break;
                                case o.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator:
                                default:
                                    n = e.container.getNamed(a.ServiceIdentifiers.IIdentifierNamesGenerator, o.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator)
                            }
                            return t = n,
                                n
                        }
                    }))
            }))
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(56),
                m = r(40),
                g = r(34),
                N = n = function (e) {
                    function t(e, r) {
                        var n;
                        return (0, o.default)(this, t),
                            (n = (0, s.default)(this, (0, c.default)(t).call(this, e, r))).randomVariableNameSet = new Set,
                            n
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "generate",
                                value: function (e) {
                                    var t = this.randomGenerator.getRandomInteger(1e4, 99999999),
                                        r = m.NumberUtils.toHex(t),
                                        a = g.Utils.hexadecimalPrefix.length + 1,
                                        o = e ? e - a : n.baseIdentifierNameLength,
                                        i = r.substr(0, o),
                                        s = "_".concat(g.Utils.hexadecimalPrefix).concat(i);
                                    return this.randomVariableNameSet.has(s) ? this.generate(e) : (this.randomVariableNameSet.add(s), s)
                                }
                            },
                            {
                                key: "generateWithPrefix",
                                value: function (e) {
                                    var t = this.generate(e);
                                    console.log(t, '======123')
                                    return "".concat(this.options.identifiersPrefix).concat(t).replace("__", "_")
                                }
                            }
                        ]),
                        t
                }(p.AbstractIdentifierNamesGenerator);
            N.baseIdentifierNameLength = 6,
                N = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Object, Object])], N),
                t.HexadecimalIdentifierNamesGenerator = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(39)),
                u = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = r(4),
                f = r(2),
                p = r(5),
                m = r(56),
                g = n = function (e) {
                    function t(e, r) {
                        var a;
                        return (0, o.default)(this, t),
                            (a = (0, s.default)(this, (0, c.default)(t).call(this, e, r))).previousMangledName = n.initMangledNameCharacter,
                            a
                    }
                    return (0, u.default)(t, e),
                        (0, i.default)(t, [{
                                key: "generate",
                                value: function (e) {
                                    var t = this.generateNewMangledName(this.previousMangledName);
                                    return this.previousMangledName = t,
                                        t
                                }
                            },
                            {
                                key: "generateWithPrefix",
                                value: function (e) {
                                    var t = this.options.identifiersPrefix ? "".concat(this.options.identifiersPrefix, "_") : "",
                                        r = this.generate(e);
                                    return "".concat(t).concat(r)
                                }
                            },
                            {
                                key: "isValidIdentifierName",
                                value: function (e) {
                                    return (0, d.default)((0, c.default)(t.prototype), "isValidIdentifierName", this).call(this, e) && !n.reservedNames.includes(e)
                                }
                            },
                            {
                                key: "generateNewMangledName",
                                value: function (e) {
                                    var t = function (e) {
                                            var t = n.nameSequence,
                                                r = e.length,
                                                a = function (e) {
                                                    return "0".repeat(e)
                                                },
                                                o = r - 1;
                                            do {
                                                var i = e.charAt(o),
                                                    s = t.indexOf(i);
                                                if (s !== t.length - 1) return e.substring(0, o) + t[s + 1] + a(r - (o + 1));
                                                --o
                                            } while (o >= 0);
                                            return "a".concat(a(r))
                                        },
                                        r = t(e);
                                    return this.isValidIdentifierName(r) || (r = this.generateNewMangledName(r)),
                                        r
                                }
                            }
                        ]),
                        t
                }(m.AbstractIdentifierNamesGenerator);
            g.initMangledNameCharacter = "9",
                g.nameSequence = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
                g.reservedNames = ["byte", "case", "char", "do", "else", "enum", "eval", "for", "goto", "if", "in", "int", "let", "long", "new", "null", "this", "true", "try", "var", "void", "with"],
                g = n = l.__decorate([f.injectable(), l.__param(0, f.inject(p.ServiceIdentifiers.IRandomGenerator)), l.__param(1, f.inject(p.ServiceIdentifiers.IOptions)), l.__metadata("design:paramtypes", [Object, Object])], g),
                t.MangledIdentifierNamesGenerator = g
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(21),
                a = r(2),
                o = r(5);
            t.nodeTransformersModule = new a.ContainerModule((function (e) {
                e(o.ServiceIdentifiers.Factory__INodeTransformer).toFactory(n.InversifyContainerFacade.getCacheFactory(o.ServiceIdentifiers.INodeTransformer))
            }))
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(21),
                a = r(2),
                o = r(5),
                i = r(20),
                s = r(57),
                c = r(29),
                d = r(140),
                u = r(141),
                l = r(142),
                f = r(143),
                p = r(144),
                m = r(145),
                g = r(146),
                N = r(147),
                v = r(148),
                y = r(149),
                _ = r(150),
                h = r(151);
            t.obfuscatingTransformersModule = new a.ContainerModule((function (e) {
                e(o.ServiceIdentifiers.INodeTransformer).to(l.CatchClauseTransformer).whenTargetNamed(c.NodeTransformer.CatchClauseTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(f.ClassDeclarationTransformer).whenTargetNamed(c.NodeTransformer.ClassDeclarationTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(p.FunctionDeclarationTransformer).whenTargetNamed(c.NodeTransformer.FunctionDeclarationTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(m.FunctionTransformer).whenTargetNamed(c.NodeTransformer.FunctionTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(g.ImportDeclarationTransformer).whenTargetNamed(c.NodeTransformer.ImportDeclarationTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(N.LabeledStatementTransformer).whenTargetNamed(c.NodeTransformer.LabeledStatementTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(v.LiteralTransformer).whenTargetNamed(c.NodeTransformer.LiteralTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(h.VariableDeclarationTransformer).whenTargetNamed(c.NodeTransformer.VariableDeclarationTransformer),
                    e(o.ServiceIdentifiers.IObfuscatingReplacer).to(u.BooleanLiteralObfuscatingReplacer).whenTargetNamed(s.LiteralObfuscatingReplacer.BooleanLiteralObfuscatingReplacer),
                    e(o.ServiceIdentifiers.IObfuscatingReplacer).to(y.NumberLiteralObfuscatingReplacer).whenTargetNamed(s.LiteralObfuscatingReplacer.NumberLiteralObfuscatingReplacer),
                    e(o.ServiceIdentifiers.IObfuscatingReplacer).to(_.StringLiteralObfuscatingReplacer).whenTargetNamed(s.LiteralObfuscatingReplacer.StringLiteralObfuscatingReplacer),
                    e(o.ServiceIdentifiers.IIdentifierObfuscatingReplacer).to(d.BaseIdentifierObfuscatingReplacer).whenTargetNamed(i.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                    e(o.ServiceIdentifiers.Factory__IObfuscatingReplacer).toFactory(n.InversifyContainerFacade.getCacheFactory(o.ServiceIdentifiers.IObfuscatingReplacer)),
                    e(o.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer).toFactory(n.InversifyContainerFacade.getCacheFactory(o.ServiceIdentifiers.IIdentifierObfuscatingReplacer))
            }))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(41),
                p = r(14),
                m = function (e) {
                    function t(e, r) {
                        var n;
                        return (0, a.default)(this, t),
                            (n = (0, i.default)(this, (0, s.default)(t).call(this, r))).blockScopesMap = new Map,
                            n.identifierNamesGenerator = e(r),
                            n
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "replace",
                                value: function (e, t) {
                                    if (this.blockScopesMap.has(t)) {
                                        var r = this.blockScopesMap.get(t);
                                        r.has(e) && (e = r.get(e))
                                    }
                                    return p.NodeFactory.identifierNode(e)
                                }
                            },
                            {
                                key: "storeGlobalName",
                                value: function (e, t) {
                                    if (!this.isReservedName(e)) {
                                        var r = this.identifierNamesGenerator.generateWithPrefix();
                                        this.blockScopesMap.has(t) || this.blockScopesMap.set(t, new Map),
                                            this.blockScopesMap.get(t).set(e, r)
                                    }
                                }
                            },
                            {
                                key: "storeLocalName",
                                value: function (e, t) {
                                    if (!this.isReservedName(e)) {
                                        var r = this.identifierNamesGenerator.generate();
                                        this.blockScopesMap.has(t) || this.blockScopesMap.set(t, new Map),
                                            this.blockScopesMap.get(t).set(e, r)
                                    }
                                }
                            },
                            {
                                key: "preserveName",
                                value: function (e) {
                                    this.identifierNamesGenerator.preserveName(e)
                                }
                            },
                            {
                                key: "isReservedName",
                                value: function (e) {
                                    return !!this.options.reservedStrings.length && this.options.reservedNames.some((function (t) {
                                        return null !== new RegExp(t, "g").exec(e)
                                    }))
                                }
                            }
                        ]),
                        t
                }(f.AbstractObfuscatingReplacer);
            m = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object])], m),
                t.BaseIdentifierObfuscatingReplacer = m
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(41),
                m = r(14),
                g = n = function (e) {
                    function t(e) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                            key: "replace",
                            value: function (e) {
                                return e ? n.getTrueUnaryExpressionNode() : n.getFalseUnaryExpressionNode()
                            }
                        }], [{
                                key: "getTrueUnaryExpressionNode",
                                value: function () {
                                    return m.NodeFactory.unaryExpressionNode("!", n.getFalseUnaryExpressionNode())
                                }
                            },
                            {
                                key: "getFalseUnaryExpressionNode",
                                value: function () {
                                    return m.NodeFactory.unaryExpressionNode("!", m.NodeFactory.arrayExpressionNode())
                                }
                            }
                        ]),
                        t
                }(p.AbstractObfuscatingReplacer);
            g = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Object])], g),
                t.BooleanLiteralObfuscatingReplacer = g
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importStar(r(16)),
                p = r(20),
                m = r(12),
                g = r(13),
                N = r(9),
                v = r(27),
                y = r(17),
                _ = function (e) {
                    function t(e, r, n) {
                        var o;
                        return (0, a.default)(this, t),
                            (o = (0, i.default)(this, (0, s.default)(t).call(this, r, n))).identifierObfuscatingReplacer = e(p.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            o
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case m.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && N.NodeGuards.isCatchClauseNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = v.NodeLexicalScopeUtils.getLexicalScope(e);
                                    return r ? (this.storeCatchClauseParam(e, r), this.replaceCatchClauseParam(e, r), e) : e
                                }
                            },
                            {
                                key: "storeCatchClauseParam",
                                value: function (e, t) {
                                    N.NodeGuards.isIdentifierNode(e.param) && this.identifierObfuscatingReplacer.storeLocalName(e.param.name, t)
                                }
                            },
                            {
                                key: "replaceCatchClauseParam",
                                value: function (e, t) {
                                    var r = this;
                                    f.replace(e, {
                                        enter: function (e, n) {
                                            if (n && N.NodeGuards.isReplaceableIdentifierNode(e, n)) {
                                                var a = r.identifierObfuscatingReplacer.replace(e.name, t).name;
                                                e.name !== a && (e.name = a, y.NodeMetadata.set(e, {
                                                    renamedIdentifier: !0
                                                }))
                                            }
                                        }
                                    })
                                }
                            }
                        ]),
                        t
                }(g.AbstractNodeTransformer);
            _ = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], _),
                t.CatchClauseTransformer = _
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importStar(r(16)),
                p = r(20),
                m = r(19),
                g = r(12),
                N = r(13),
                v = r(9),
                y = r(27),
                _ = r(17),
                h = function (e) {
                    function t(e, r, n) {
                        var o;
                        return (0, a.default)(this, t),
                            (o = (0, i.default)(this, (0, s.default)(t).call(this, r, n))).replaceableIdentifiers = new Map,
                            o.identifierObfuscatingReplacer = e(p.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            o
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case g.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && v.NodeGuards.isClassDeclarationNode(e) && !v.NodeGuards.isExportNamedDeclarationNode(r)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = y.NodeLexicalScopeUtils.getLexicalScope(e);
                                    if (!r) return e;
                                    var n = r.type === m.NodeType.Program;
                                    return !this.options.renameGlobals && n ? e : (this.storeClassName(e, r, n), this.replaceableIdentifiers.has(r) ? this.replaceScopeCachedIdentifiers(e, r) : this.replaceScopeIdentifiers(r), e)
                                }
                            },
                            {
                                key: "storeClassName",
                                value: function (e, t, r) {
                                    r ? this.identifierObfuscatingReplacer.storeGlobalName(e.id.name, t) : this.identifierObfuscatingReplacer.storeLocalName(e.id.name, t)
                                }
                            },
                            {
                                key: "replaceScopeCachedIdentifiers",
                                value: function (e, t) {
                                    var r = this.replaceableIdentifiers.get(t).get(e.id.name);
                                    if (r)
                                        for (var n = r.length,
                                                a = 0; a < n; a++) {
                                            var o = r[a],
                                                i = this.identifierObfuscatingReplacer.replace(o.name, t);
                                            o.name = i.name,
                                                _.NodeMetadata.set(o, {
                                                    renamedIdentifier: !0
                                                })
                                        }
                                }
                            },
                            {
                                key: "replaceScopeIdentifiers",
                                value: function (e) {
                                    var t = this,
                                        r = new Map;
                                    f.replace(e, {
                                            enter: function (n, a) {
                                                if (a && v.NodeGuards.isReplaceableIdentifierNode(n, a) && !_.NodeMetadata.isRenamedIdentifier(n)) {
                                                    var o = t.identifierObfuscatingReplacer.replace(n.name, e).name;
                                                    if (n.name !== o) n.name = o,
                                                        _.NodeMetadata.set(n, {
                                                            renamedIdentifier: !0
                                                        });
                                                    else {
                                                        var i = r.get(n.name) || [];
                                                        i.push(n),
                                                            r.set(n.name, i)
                                                    }
                                                }
                                            }
                                        }),
                                        this.replaceableIdentifiers.set(e, r)
                                }
                            }
                        ]),
                        t
                }(N.AbstractNodeTransformer);
            h = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], h),
                t.ClassDeclarationTransformer = h
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importStar(r(16)),
                p = r(20),
                m = r(19),
                g = r(12),
                N = r(13),
                v = r(9),
                y = r(27),
                _ = r(17),
                h = function (e) {
                    function t(e, r, n) {
                        var o;
                        return (0, a.default)(this, t),
                            (o = (0, i.default)(this, (0, s.default)(t).call(this, r, n))).replaceableIdentifiers = new Map,
                            o.identifierObfuscatingReplacer = e(p.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            o
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case g.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && v.NodeGuards.isFunctionDeclarationNode(e) && !v.NodeGuards.isExportNamedDeclarationNode(r)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = y.NodeLexicalScopeUtils.getLexicalScope(t);
                                    if (!r) return e;
                                    var n = r.type === m.NodeType.Program;
                                    return !this.options.renameGlobals && n ? e : (this.storeFunctionName(e, r, n), this.replaceableIdentifiers.has(r) ? this.replaceScopeCachedIdentifiers(e, r) : this.replaceScopeIdentifiers(r), e)
                                }
                            },
                            {
                                key: "storeFunctionName",
                                value: function (e, t, r) {
                                    r ? this.identifierObfuscatingReplacer.storeGlobalName(e.id.name, t) : this.identifierObfuscatingReplacer.storeLocalName(e.id.name, t)
                                }
                            },
                            {
                                key: "replaceScopeCachedIdentifiers",
                                value: function (e, t) {
                                    var r = this.replaceableIdentifiers.get(t).get(e.id.name);
                                    if (r)
                                        for (var n = r.length,
                                                a = 0; a < n; a++) {
                                            var o = r[a],
                                                i = this.identifierObfuscatingReplacer.replace(o.name, t);
                                            o.name = i.name,
                                                _.NodeMetadata.set(o, {
                                                    renamedIdentifier: !0
                                                })
                                        }
                                }
                            },
                            {
                                key: "replaceScopeIdentifiers",
                                value: function (e) {
                                    var t = this,
                                        r = new Map;
                                    f.replace(e, {
                                            enter: function (n, a) {
                                                if (a && a !== e && v.NodeGuards.isReplaceableIdentifierNode(n, a) && !_.NodeMetadata.isRenamedIdentifier(n)) {
                                                    var o = t.identifierObfuscatingReplacer.replace(n.name, e).name;
                                                    if (n.name !== o) n.name = o,
                                                        _.NodeMetadata.set(n, {
                                                            renamedIdentifier: !0
                                                        });
                                                    else {
                                                        var i = r.get(n.name) || [];
                                                        i.push(n),
                                                            r.set(n.name, i)
                                                    }
                                                }
                                            }
                                        }),
                                        this.replaceableIdentifiers.set(e, r)
                                }
                            }
                        ]),
                        t
                }(N.AbstractNodeTransformer);
            h = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], h),
                t.FunctionDeclarationTransformer = h
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importStar(r(16)),
                m = r(20),
                g = r(12),
                N = r(13),
                v = r(9),
                y = r(27),
                _ = r(17),
                h = r(19),
                b = n = function (e) {
                    function t(e, r, n) {
                        var a;
                        return (0, o.default)(this, t),
                            (a = (0, s.default)(this, (0, c.default)(t).call(this, r, n))).identifierObfuscatingReplacer = e(m.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            a
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case g.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && v.NodeGuards.isFunctionNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = y.NodeLexicalScopeUtils.getLexicalScope(e);
                                    return r ? (this.storeFunctionParams(e, r), this.replaceFunctionParams(e, r), e) : e
                                }
                            },
                            {
                                key: "isGlobalFunctionDeclarationIdentifier",
                                value: function (e, t) {
                                    if (!v.NodeGuards.isFunctionDeclarationNode(t) || t.id !== e) return !1;
                                    var r = y.NodeLexicalScopeUtils.getLexicalScopes(t)[1];
                                    if (!r) return !1;
                                    var n = r.type === h.NodeType.Program;
                                    return !this.options.renameGlobals && n
                                }
                            },
                            {
                                key: "storeFunctionParams",
                                value: function (e, t) {
                                    var r = this,
                                        a = {
                                            enter: function (e, a) {
                                                if (!n.isProhibitedIdentifierOfPropertyNode(e, a)) return v.NodeGuards.isAssignmentPatternNode(e) && v.NodeGuards.isIdentifierNode(e.left) ? (r.identifierObfuscatingReplacer.storeLocalName(e.left.name, t), p.VisitorOption.Skip) : void(v.NodeGuards.isIdentifierNode(e) && r.identifierObfuscatingReplacer.storeLocalName(e.name, t))
                                            }
                                        };
                                    e.params.forEach((function (e) {
                                        p.traverse(e, a)
                                    }))
                                }
                            },
                            {
                                key: "replaceFunctionParams",
                                value: function (e, t) {
                                    var r = this,
                                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set,
                                        o = {
                                            enter: function (o, i) {
                                                if (v.NodeGuards.isFunctionNode(o) && o !== e) return r.replaceFunctionParams(o, t, new Set(a)),
                                                    p.VisitorOption.Skip;
                                                if (n.isProhibitedIdentifierOfShorthandPropertyNode(o)) a.add(o.key.name);
                                                else if (i && v.NodeGuards.isReplaceableIdentifierNode(o, i) && !_.NodeMetadata.isRenamedIdentifier(o) && !a.has(o.name)) {
                                                    if (r.isGlobalFunctionDeclarationIdentifier(o, i)) return;
                                                    var s = r.identifierObfuscatingReplacer.replace(o.name, t).name;
                                                    o.name !== s && (o.name = s, _.NodeMetadata.set(o, {
                                                        renamedIdentifier: !0
                                                    }))
                                                }
                                            }
                                        };
                                    p.replace(e, o)
                                }
                            }
                        ], [{
                                key: "isProhibitedIdentifierOfPropertyNode",
                                value: function (e, t) {
                                    return v.NodeGuards.isIdentifierNode(e) && !!t && v.NodeGuards.isPropertyNode(t) && t.key === e
                                }
                            },
                            {
                                key: "isProhibitedIdentifierOfShorthandPropertyNode",
                                value: function (e) {
                                    return v.NodeGuards.isPropertyNode(e) && e.shorthand && v.NodeGuards.isIdentifierNode(e.key)
                                }
                            }
                        ]),
                        t
                }(N.AbstractNodeTransformer);
            b = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], b),
                t.FunctionTransformer = b
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importStar(r(16)),
                m = r(20),
                g = r(12),
                N = r(13),
                v = r(9),
                y = r(27),
                _ = r(17),
                h = n = function (e) {
                    function t(e, r, n) {
                        var a;
                        return (0, o.default)(this, t),
                            (a = (0, s.default)(this, (0, c.default)(t).call(this, r, n))).replaceableIdentifiers = new Map,
                            a.identifierObfuscatingReplacer = e(m.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            a
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case g.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && v.NodeGuards.isImportDeclarationNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = y.NodeLexicalScopeUtils.getLexicalScope(e);
                                    return r ? (this.storeImportSpecifierNames(e, r), this.replaceableIdentifiers.has(r) ? this.replaceScopeCachedIdentifiers(r) : this.replaceScopeIdentifiers(r), e) : e
                                }
                            },
                            {
                                key: "storeImportSpecifierNames",
                                value: function (e, t) {
                                    var r = this;
                                    e.specifiers.forEach((function (e) {
                                        n.isProhibitedImportSpecifierNode(e) || r.identifierObfuscatingReplacer.storeGlobalName(e.local.name, t)
                                    }))
                                }
                            },
                            {
                                key: "replaceScopeCachedIdentifiers",
                                value: function (e) {
                                    var t = this;
                                    this.replaceableIdentifiers.get(e).forEach((function (r) {
                                        var n = t.identifierObfuscatingReplacer.replace(r.name, e);
                                        r.name = n.name,
                                            _.NodeMetadata.set(r, {
                                                renamedIdentifier: !0
                                            })
                                    }))
                                }
                            },
                            {
                                key: "replaceScopeIdentifiers",
                                value: function (e) {
                                    var t = this,
                                        r = [];
                                    p.replace(e, {
                                            enter: function (n, a) {
                                                if (a && v.NodeGuards.isReplaceableIdentifierNode(n, a) && !_.NodeMetadata.isRenamedIdentifier(n)) {
                                                    var o = t.identifierObfuscatingReplacer.replace(n.name, e).name;
                                                    n.name !== o ? (n.name = o, _.NodeMetadata.set(n, {
                                                        renamedIdentifier: !0
                                                    })) : r.push(n)
                                                }
                                            }
                                        }),
                                        this.replaceableIdentifiers.set(e, r)
                                }
                            }
                        ], [{
                            key: "isProhibitedImportSpecifierNode",
                            value: function (e) {
                                return v.NodeGuards.isImportSpecifierNode(e) && e.imported.name === e.local.name
                            }
                        }]),
                        t
                }(N.AbstractNodeTransformer);
            h = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], h),
                t.ImportDeclarationTransformer = h
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importStar(r(16)),
                p = r(20),
                m = r(12),
                g = r(13),
                N = r(9),
                v = r(27),
                y = function (e) {
                    function t(e, r, n) {
                        var o;
                        return (0, a.default)(this, t),
                            (o = (0, i.default)(this, (0, s.default)(t).call(this, r, n))).identifierObfuscatingReplacer = e(p.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            o
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case m.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && N.NodeGuards.isLabeledStatementNode(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = v.NodeLexicalScopeUtils.getLexicalScope(e);
                                    return r ? (this.storeLabeledStatementName(e, r), this.replaceLabeledStatementName(e, r), e) : e
                                }
                            },
                            {
                                key: "storeLabeledStatementName",
                                value: function (e, t) {
                                    this.identifierObfuscatingReplacer.storeLocalName(e.label.name, t)
                                }
                            },
                            {
                                key: "replaceLabeledStatementName",
                                value: function (e, t) {
                                    var r = this;
                                    f.replace(e, {
                                        enter: function (e, n) {
                                            if (n && N.NodeGuards.isLabelIdentifierNode(e, n)) {
                                                var a = r.identifierObfuscatingReplacer.replace(e.name, t);
                                                e.name = a.name
                                            }
                                        }
                                    })
                                }
                            }
                        ]),
                        t
                }(g.AbstractNodeTransformer);
            y = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], y),
                t.LabeledStatementTransformer = y
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(50)),
                o = n(r(1)),
                i = n(r(3)),
                s = n(r(6)),
                c = n(r(7)),
                d = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(57),
                m = r(12),
                g = r(13),
                N = r(9),
                v = r(17),
                y = r(11),
                _ = function (e) {
                    function t(e, r, n) {
                        var a;
                        return (0, o.default)(this, t),
                            (a = (0, s.default)(this, (0, c.default)(t).call(this, r, n))).literalObfuscatingReplacerFactory = e,
                            a
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case m.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && N.NodeGuards.isLiteralNode(e) && !v.NodeMetadata.isReplacedLiteral(e)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    if (this.isProhibitedNode(e, t)) return e;
                                    var r;
                                    switch ((0, a.default)(e.value)) {
                                        case "boolean":
                                            r = this.literalObfuscatingReplacerFactory(p.LiteralObfuscatingReplacer.BooleanLiteralObfuscatingReplacer).replace(e.value);
                                            break;
                                        case "number":
                                            r = this.literalObfuscatingReplacerFactory(p.LiteralObfuscatingReplacer.NumberLiteralObfuscatingReplacer).replace(e.value);
                                            break;
                                        case "string":
                                            r = this.literalObfuscatingReplacerFactory(p.LiteralObfuscatingReplacer.StringLiteralObfuscatingReplacer).replace(e.value);
                                            break;
                                        default:
                                            r = e
                                    }
                                    return y.NodeUtils.parentizeNode(r, t),
                                        r
                                }
                            },
                            {
                                key: "isProhibitedNode",
                                value: function (e, t) {
                                    return !(!N.NodeGuards.isPropertyNode(t) || t.key !== e) || !!N.NodeGuards.isImportDeclarationNode(t)
                                }
                            }
                        ]),
                        t
                }(g.AbstractNodeTransformer);
            _ = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__IObfuscatingReplacer)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], _),
                t.LiteralTransformer = _
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(41),
                p = r(14),
                m = r(40),
                g = r(34),
                N = function (e) {
                    function t(e) {
                        var r;
                        return (0, a.default)(this, t),
                            (r = (0, i.default)(this, (0, s.default)(t).call(this, e))).numberLiteralCache = new Map,
                            r
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                            key: "replace",
                            value: function (e) {
                                var t;
                                return this.numberLiteralCache.has(e) ? t = this.numberLiteralCache.get(e) : (t = m.NumberUtils.isCeil(e) ? "".concat(g.Utils.hexadecimalPrefix).concat(m.NumberUtils.toHex(e)) : String(e), this.numberLiteralCache.set(e, t)),
                                    p.NodeFactory.literalNode(e, t)
                            }
                        }]),
                        t
                }(f.AbstractObfuscatingReplacer);
            N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object])], N),
                t.NumberLiteralObfuscatingReplacer = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(37),
                m = r(41),
                g = r(17),
                N = r(14),
                v = r(40),
                y = r(34),
                _ = n = function (e) {
                    function t(e, r, a, i, d) {
                        var u;
                        return (0, o.default)(this, t),
                            (u = (0, s.default)(this, (0, c.default)(t).call(this, d))).nodesCache = new Map,
                            u.stringLiteralHexadecimalIndexCache = new Map,
                            u.stringArrayStorage = e,
                            u.escapeSequenceEncoder = r,
                            u.randomGenerator = a,
                            u.cryptUtils = i,
                            u.rc4Keys = u.randomGenerator.getRandomGenerator().n((function () {
                                return u.randomGenerator.getRandomGenerator().string({
                                    length: n.rc4KeyLength
                                })
                            }), n.rc4KeysCount),
                            u
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "replace",
                                value: function (e) {
                                    if (this.isReservedString(e)) return this.replaceWithReservedLiteralNode(e);
                                    var t = this.canUseStringArray(e),
                                        r = "".concat(e, "-").concat(String(t));
                                    if (this.nodesCache.has(r) && this.options.stringArrayEncoding !== p.StringArrayEncoding.Rc4) return this.nodesCache.get(r);
                                    var n = t ? this.replaceWithStringArrayCallNode(e) : this.replaceWithLiteralNode(e);
                                    return this.nodesCache.set(r, n),
                                        n
                                }
                            },
                            {
                                key: "canUseStringArray",
                                value: function (e) {
                                    return this.options.stringArray && e.length >= n.minimumLengthForStringArray && this.randomGenerator.getMathRandom() <= this.options.stringArrayThreshold
                                }
                            },
                            {
                                key: "getStringArrayHexadecimalIndex",
                                value: function (e, t) {
                                    if (this.stringLiteralHexadecimalIndexCache.has(e)) return {
                                        fromCache: !0,
                                        index: this.stringLiteralHexadecimalIndexCache.get(e)
                                    };
                                    var r = v.NumberUtils.toHex(t),
                                        n = "".concat(y.Utils.hexadecimalPrefix).concat(r);
                                    // console.log(e, t, r, n)
                                    // 处理下面的字符串
                                    // bh++
                                    // bh_obj1[bhstr + fun10to64(bh)] = n
                                    // console.log(n)
                                    function getRndInteger(min, max) {
                                        return Math.floor(Math.random() * (max - min)) + min;
                                    }
                                    let strNum = getRndInteger(1, n.length - 1)

                                    // downArr1.push(`downL_${n.slice(0,strNum)}_downR`)
                                    // downArr2.push(`downL_${n.slice(strNum,n.length)}_downR`)

                                    downArr1.push(`${n.slice(0,strNum)}`)
                                    downArr2.push(`${n.slice(strNum,n.length)}`)
                                    // allStr += `${bhstr + fun10to64(bh)}_:_${n}_&_`
                                    // n = `${strLeft + bhstr + fun10to64(bh) + strRight}`
                                    // n = `${strLeft + bhstr}arr1[${bh}]+arr2[${bh}]${strRight}`

                                    n = `${strLeft}${downArr1Str}[${t}]+${downArr2Str}[${t}]${strRight}`
                                    return this.stringLiteralHexadecimalIndexCache.set(e, n), {
                                        fromCache: !1,
                                        index: n
                                    }
                                }
                            },
                            {
                                key: "getEncodedValue",
                                value: function (e) {
                                    var t, r = null;
                                    switch (this.options.stringArrayEncoding) {
                                        case p.StringArrayEncoding.Rc4:
                                            r = this.randomGenerator.getRandomGenerator().pickone(this.rc4Keys),
                                                t = this.cryptUtils.btoa(this.cryptUtils.rc4(e, r));
                                            break;
                                        case p.StringArrayEncoding.Base64:
                                            t = this.cryptUtils.btoa(e);
                                            break;
                                        default:
                                            t = e
                                    }
                                    return {
                                        encodedValue: t,
                                        key: r
                                    }
                                }
                            },
                            {
                                key: "replaceWithLiteralNode",
                                value: function (e) {
                                    return N.NodeFactory.literalNode(this.escapeSequenceEncoder.encode(e, this.options.unicodeEscapeSequence))
                                }
                            },
                            {
                                key: "replaceWithReservedLiteralNode",
                                value: function (e) {
                                    return N.NodeFactory.literalNode(this.escapeSequenceEncoder.encode(e, !1))
                                }
                            },
                            {
                                key: "replaceWithStringArrayCallNode",
                                value: function (e) {
                                    var t = this.getEncodedValue(e),
                                        r = t.encodedValue,
                                        a = t.key,
                                        o = this.escapeSequenceEncoder.encode(r, this.options.unicodeEscapeSequence),
                                        i = this.stringArrayStorage.getLength(),
                                        s = this.stringArrayStorage.getStorageId().split("|")[1],
                                        c = this.getStringArrayHexadecimalIndex(o, i),
                                        d = c.fromCache,
                                        u = c.index;
                                    d || this.stringArrayStorage.set(i, o);
                                    var l = [n.getHexadecimalLiteralNode(u)];
                                    a && l.push(n.getRc4KeyLiteralNode(this.escapeSequenceEncoder.encode(a, this.options.unicodeEscapeSequence)));
                                    var f = N.NodeFactory.identifierNode(s);
                                    return g.NodeMetadata.set(f, {
                                            renamedIdentifier: !0
                                        }),
                                        N.NodeFactory.callExpressionNode(f, l)
                                }
                            },
                            {
                                key: "isReservedString",
                                value: function (e) {
                                    return !!this.options.reservedStrings.length && this.options.reservedStrings.some((function (t) {
                                        return null !== new RegExp(t, "g").exec(e)
                                    }))
                                }
                            }
                        ], [{
                                key: "getHexadecimalLiteralNode",
                                value: function (e) {
                                    var t = N.NodeFactory.literalNode(e);
                                    return g.NodeMetadata.set(t, {
                                            replacedLiteral: !0
                                        }),
                                        t
                                }
                            },
                            {
                                key: "getRc4KeyLiteralNode",
                                value: function (e) {
                                    var t = N.NodeFactory.literalNode(e);
                                    return g.NodeMetadata.set(t, {
                                            replacedLiteral: !0
                                        }),
                                        t
                                }
                            }
                        ]),
                        t
                }(m.AbstractObfuscatingReplacer);
            _.minimumLengthForStringArray = 3,
                _.rc4KeyLength = 4,
                _.rc4KeysCount = 50,
                _ = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.TStringArrayStorage)), u.__param(1, l.inject(f.ServiceIdentifiers.IEscapeSequenceEncoder)), u.__param(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(3, l.inject(f.ServiceIdentifiers.ICryptUtils)), u.__param(4, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Object, Object, Object, Object, Object])], _),
                t.StringLiteralObfuscatingReplacer = _
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = d.__importStar(r(16)),
                p = r(20),
                m = r(19),
                g = r(12),
                N = r(13),
                v = r(9),
                y = r(27),
                _ = r(152),
                h = r(17),
                b = function (e) {
                    function t(e, r, n) {
                        var o;
                        return (0, a.default)(this, t),
                            (o = (0, i.default)(this, (0, s.default)(t).call(this, r, n))).replaceableIdentifiers = new Map,
                            o.identifierObfuscatingReplacer = e(p.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            o
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case g.TransformationStage.Obfuscating:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && v.NodeGuards.isVariableDeclarationNode(e) && !v.NodeGuards.isExportNamedDeclarationNode(r)) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = "var" === e.kind ? y.NodeLexicalScopeUtils.getLexicalScope(e) : _.NodeBlockLexicalScopeUtils.getLexicalScope(e);
                                    if (!r) return e;
                                    var n = r.type === m.NodeType.Program;
                                    if (!this.options.renameGlobals && n) return e;
                                    var a = "var" === e.kind ? r : t;
                                    return this.storeVariableNames(e, r, n),
                                        this.replaceableIdentifiers.has(a) ? this.replaceScopeCachedIdentifiers(e, r, a) : this.replaceScopeIdentifiers(a, r),
                                        e
                                }
                            },
                            {
                                key: "storeVariableNames",
                                value: function (e, t, r) {
                                    var n = this;
                                    this.traverseDeclarationIdentifiers(e, (function (e) {
                                        r ? n.identifierObfuscatingReplacer.storeGlobalName(e.name, t) : n.identifierObfuscatingReplacer.storeLocalName(e.name, t)
                                    }))
                                }
                            },
                            {
                                key: "replaceScopeCachedIdentifiers",
                                value: function (e, t, r) {
                                    var n = this,
                                        a = this.replaceableIdentifiers.get(r),
                                        o = [];
                                    this.traverseDeclarationIdentifiers(e, (function (e) {
                                            o.push(e.name)
                                        })),
                                        o.forEach((function (e) {
                                            var r = a.get(e);
                                            if (r)
                                                for (var o = r.length,
                                                        i = 0; i < o; i++) {
                                                    var s = r[i];
                                                    if (e === s.name) {
                                                        var c = n.identifierObfuscatingReplacer.replace(s.name, t);
                                                        s.name = c.name,
                                                            h.NodeMetadata.set(s, {
                                                                renamedIdentifier: !0
                                                            })
                                                    }
                                                }
                                        }))
                                }
                            },
                            {
                                key: "replaceScopeIdentifiers",
                                value: function (e, t) {
                                    var r = this,
                                        n = new Map;
                                    f.replace(e, {
                                            enter: function (e, a) {
                                                if (a && v.NodeGuards.isReplaceableIdentifierNode(e, a) && !h.NodeMetadata.isRenamedIdentifier(e)) {
                                                    var o = r.identifierObfuscatingReplacer.replace(e.name, t).name;
                                                    if (e.name !== o) e.name = o,
                                                        h.NodeMetadata.set(e, {
                                                            renamedIdentifier: !0
                                                        });
                                                    else {
                                                        var i = n.get(e.name) || [];
                                                        i.push(e),
                                                            n.set(e.name, i)
                                                    }
                                                }
                                            }
                                        }),
                                        this.replaceableIdentifiers.set(e, n)
                                }
                            },
                            {
                                key: "traverseDeclarationIdentifiers",
                                value: function (e, t) {
                                    e.declarations.forEach((function (e) {
                                        f.traverse(e.id, {
                                            enter: function (e) {
                                                if (v.NodeGuards.isPropertyNode(e)) return f.VisitorOption.Skip;
                                                v.NodeGuards.isIdentifierNode(e) && t(e)
                                            }
                                        })
                                    }))
                                }
                            }
                        ]),
                        t
                }(N.AbstractNodeTransformer);
            b = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d.__param(1, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], b),
                t.VariableDeclarationTransformer = b
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9),
                s = function () {
                    function e() {
                        (0, a.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                                key: "getLexicalScope",
                                value: function (t) {
                                    return e.getLexicalScopesRecursive(t, 1)[0]
                                }
                            },
                            {
                                key: "getLexicalScopes",
                                value: function (t) {
                                    return e.getLexicalScopesRecursive(t)
                                }
                            },
                            {
                                key: "getLexicalScopesRecursive",
                                value: function (t) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                                    if (n.length >= r) return n;
                                    var o = t.parentNode;
                                    if (!o) throw new ReferenceError("`parentNode` property of given node is `undefined`");
                                    return i.NodeGuards.isNodeWithBlockLexicalScope(t) && n.push(t),
                                        t !== o ? e.getLexicalScopesRecursive(o, r, n, ++a) : n
                                }
                            }
                        ]),
                        e
                }();
            t.NodeBlockLexicalScopeUtils = s
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2),
                a = r(5),
                o = r(154),
                i = r(157);
            t.optionsModule = new n.ContainerModule((function (e) {
                e(a.ServiceIdentifiers.IOptions).to(o.Options).inSingletonScope(),
                    e(a.ServiceIdentifiers.IOptionsNormalizer).to(i.OptionsNormalizer).inSingletonScope()
            }))
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0)(r(1));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(4),
                i = r(2),
                s = r(5),
                c = r(155),
                d = r(35),
                u = r(23),
                l = r(36),
                f = r(37),
                p = r(46),
                m = r(156),
                g = n = function e(t, r) {
                    (0, a.default)(this, e),
                    Object.assign(this, p.DEFAULT_PRESET, t);
                    var o = c.validateSync(this, n.validatorOptions);
                    if (o.length) throw new ReferenceError("Validation failed. errors:\n".concat(m.ValidationErrorsFormatter.format(o)));
                    Object.assign(this, r.normalize(this))
                };
            g.validatorOptions = {
                    validationError: {
                        target: !1
                    }
                },
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "compact", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "controlFlowFlattening", void 0),
                o.__decorate([c.IsNumber(), c.Min(0), c.Max(1), o.__metadata("design:type", Number)], g.prototype, "controlFlowFlatteningThreshold", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "deadCodeInjection", void 0),
                o.__decorate([c.IsNumber(), o.__metadata("design:type", Number)], g.prototype, "deadCodeInjectionThreshold", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "debugProtection", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "debugProtectionInterval", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "disableConsoleOutput", void 0),
                o.__decorate([c.IsArray(), c.ArrayUnique(), c.IsString({
                    each: !0
                }), o.__metadata("design:type", Array)], g.prototype, "domainLock", void 0),
                o.__decorate([c.IsIn([d.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator, d.IdentifierNamesGenerator.MangledIdentifierNamesGenerator]), o.__metadata("design:type", String)], g.prototype, "identifierNamesGenerator", void 0),
                o.__decorate([c.IsString(), o.__metadata("design:type", String)], g.prototype, "identifiersPrefix", void 0),
                o.__decorate([c.IsString(), o.__metadata("design:type", String)], g.prototype, "inputFileName", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "log", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "renameGlobals", void 0),
                o.__decorate([c.IsArray(), c.ArrayUnique(), c.IsString({
                    each: !0
                }), o.__metadata("design:type", Array)], g.prototype, "reservedNames", void 0),
                o.__decorate([c.IsArray(), c.ArrayUnique(), c.IsString({
                    each: !0
                }), o.__metadata("design:type", Array)], g.prototype, "reservedStrings", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "rotateStringArray", void 0),
                o.__decorate([c.IsNumber(), o.__metadata("design:type", Number)], g.prototype, "seed", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "selfDefending", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "sourceMap", void 0),
                o.__decorate([c.IsString(), c.ValidateIf((function (e) {
                    return Boolean(e.sourceMapBaseUrl)
                })), c.IsUrl({
                    require_protocol: !0,
                    require_tld: !1,
                    require_valid_protocol: !0
                }), o.__metadata("design:type", String)], g.prototype, "sourceMapBaseUrl", void 0),
                o.__decorate([c.IsString(), o.__metadata("design:type", String)], g.prototype, "sourceMapFileName", void 0),
                o.__decorate([c.IsIn([l.SourceMapMode.Inline, l.SourceMapMode.Separate]), o.__metadata("design:type", String)], g.prototype, "sourceMapMode", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "stringArray", void 0),
                o.__decorate([c.IsIn([!0, !1, f.StringArrayEncoding.Base64, f.StringArrayEncoding.Rc4]), o.__metadata("design:type", Object)], g.prototype, "stringArrayEncoding", void 0),
                o.__decorate([c.IsNumber(), c.Min(0), c.Max(1), o.__metadata("design:type", Number)], g.prototype, "stringArrayThreshold", void 0),
                o.__decorate([c.IsIn([u.ObfuscationTarget.Browser, u.ObfuscationTarget.BrowserNoEval, u.ObfuscationTarget.Node]), o.__metadata("design:type", String)], g.prototype, "target", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "transformObjectKeys", void 0),
                o.__decorate([c.IsBoolean(), o.__metadata("design:type", Boolean)], g.prototype, "unicodeEscapeSequence", void 0),
                g = n = o.__decorate([i.injectable(), o.__param(0, i.inject(s.ServiceIdentifiers.TInputOptions)), o.__param(1, i.inject(s.ServiceIdentifiers.IOptionsNormalizer)), o.__metadata("design:paramtypes", [Object, Object])], g),
                t.Options = g
        },
        function (e, t) {
            e.exports = require("class-validator")
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(28)),
                o = n(r(1)),
                i = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function () {
                function e() {
                    (0, o.default)(this, e)
                }
                return (0, i.default)(e, null, [{
                            key: "format",
                            value: function (t) {
                                return t.reduce((function (t, r) {
                                    return [].concat((0, a.default)(t), [e.formatWithNestedConstraints(r)])
                                }), []).join("\n")
                            }
                        },
                        {
                            key: "formatWithNestedConstraints",
                            value: function (e) {
                                var t = e.constraints,
                                    r = "`".concat(e.property, "` errors:\n"),
                                    n = Object.keys(t).map((function (e) {
                                        return "    - ".concat(t[e], "\n")
                                    })).join();
                                return "".concat(r).concat(n)
                            }
                        }
                    ]),
                    e
            }();
            t.ValidationErrorsFormatter = s
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(158),
                u = r(159),
                l = r(160),
                f = r(161),
                p = r(162),
                m = r(163),
                g = r(164),
                N = r(165),
                v = r(166),
                y = r(167),
                _ = r(168),
                h = n = function () {
                    function e() {
                        (0, o.default)(this, e)
                    }
                    return (0, i.default)(e, [{
                            key: "normalize",
                            value: function (e) {
                                var t = Object.assign({},
                                        e),
                                    r = !0,
                                    a = !1,
                                    o = void 0;
                                try {
                                    for (var i, s = n.normalizerRules[Symbol.iterator](); !(r = (i = s.next()).done); r = !0) {
                                        t = (0, i.value)(t)
                                    }
                                } catch (e) {
                                    a = !0,
                                        o = e
                                } finally {
                                    try {
                                        r || null == s.
                                        return || s.
                                        return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return t
                            }
                        }]),
                        e
                }();
            h.normalizerRules = [d.ControlFlowFlatteningThresholdRule, u.DeadCodeInjectionRule, l.DeadCodeInjectionThresholdRule, f.DomainLockRule, p.InputFileNameRule, m.SelfDefendingRule, g.SourceMapBaseUrlRule, N.SourceMapFileNameRule, v.StringArrayRule, y.StringArrayEncodingRule, _.StringArrayThresholdRule],
                h = n = s.__decorate([c.injectable()], h),
                t.OptionsNormalizer = h
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ControlFlowFlatteningThresholdRule = function (e) {
                    return 0 === e.controlFlowFlatteningThreshold && (e = Object.assign(Object.assign({},
                            e), {
                            controlFlowFlattening: !1,
                            controlFlowFlatteningThreshold: 0
                        })),
                        e
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(46);
            t.DeadCodeInjectionRule = function (e) {
                return e.deadCodeInjection && ((e = Object.assign(Object.assign({},
                        e), {
                        deadCodeInjection: !0,
                        stringArray: !0
                    })).stringArrayThreshold || (e = Object.assign(Object.assign({},
                        e), {
                        stringArray: !0,
                        stringArrayThreshold: n.DEFAULT_PRESET.stringArrayThreshold
                    }))),
                    e
            }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DeadCodeInjectionThresholdRule = function (e) {
                    return 0 === e.deadCodeInjectionThreshold && (e = Object.assign(Object.assign({},
                            e), {
                            deadCodeInjection: !1,
                            deadCodeInjectionThreshold: 0
                        })),
                        e
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(34);
            t.DomainLockRule = function (e) {
                if (e.domainLock.length) {
                    var t = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, s = e.domainLock[Symbol.iterator](); !(r = (i = s.next()).done); r = !0) {
                            var c = i.value;
                            t.push(n.Utils.extractDomainFrom(c))
                        }
                    } catch (e) {
                        a = !0,
                            o = e
                    } finally {
                        try {
                            r || null == s.
                            return || s.
                            return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    e = Object.assign(Object.assign({},
                        e), {
                        domainLock: t
                    })
                }
                return e
            }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.InputFileNameRule = function (e) {
                    var t = e.inputFileName;
                    return t && (t = t.replace(/^\/+/, "").split(".").slice(0, -1).join(".") || t, e = Object.assign(Object.assign({},
                            e), {
                            inputFileName: "".concat(t, ".js")
                        })),
                        e
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SelfDefendingRule = function (e) {
                    return e.selfDefending && (e = Object.assign(Object.assign({},
                            e), {
                            compact: !0,
                            selfDefending: !0
                        })),
                        e
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SourceMapBaseUrlRule = function (e) {
                    var t = e.sourceMapBaseUrl;
                    return e.sourceMapFileName ? (t && !t.endsWith("/") && (e = Object.assign(Object.assign({},
                        e), {
                        sourceMapBaseUrl: "".concat(t, "/")
                    })), e) : e = Object.assign(Object.assign({},
                        e), {
                        sourceMapBaseUrl: ""
                    })
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SourceMapFileNameRule = function (e) {
                    var t = e.sourceMapFileName;
                    return t && (t = t.replace(/^\/+/, "").split(".")[0], e = Object.assign(Object.assign({},
                            e), {
                            sourceMapFileName: "".concat(t, ".js.map")
                        })),
                        e
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StringArrayRule = function (e) {
                    return e.stringArray || (e = Object.assign(Object.assign({},
                            e), {
                            rotateStringArray: !1,
                            stringArray: !1,
                            stringArrayEncoding: !1,
                            stringArrayThreshold: 0
                        })),
                        e
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(37);
            t.StringArrayEncodingRule = function (e) {
                return !0 === e.stringArrayEncoding && (e = Object.assign(Object.assign({},
                        e), {
                        stringArrayEncoding: n.StringArrayEncoding.Base64
                    })),
                    e
            }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StringArrayThresholdRule = function (e) {
                    return 0 === e.stringArrayThreshold && (e = Object.assign(Object.assign({},
                            e), {
                            rotateStringArray: !1,
                            stringArray: !1,
                            stringArrayEncoding: !1,
                            stringArrayThreshold: 0
                        })),
                        e
                }
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(21),
                a = r(2),
                o = r(5),
                i = r(29),
                s = r(58),
                c = r(170),
                d = r(171),
                u = r(59),
                l = r(172),
                f = r(173),
                p = r(175),
                m = r(176),
                g = r(177),
                N = r(178);
            t.preparingTransformersModule = new a.ContainerModule((function (e) {
                e(o.ServiceIdentifiers.INodeTransformer).to(d.CommentsTransformer).whenTargetNamed(i.NodeTransformer.CommentsTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(l.CustomNodesTransformer).whenTargetNamed(i.NodeTransformer.CustomNodesTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(f.EvalCallExpressionTransformer).whenTargetNamed(i.NodeTransformer.EvalCallExpressionTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(p.MetadataTransformer).whenTargetNamed(i.NodeTransformer.MetadataTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(m.ObfuscatingGuardsTransformer).whenTargetNamed(i.NodeTransformer.ObfuscatingGuardsTransformer),
                    e(o.ServiceIdentifiers.INodeTransformer).to(g.ParentificationTransformer).whenTargetNamed(i.NodeTransformer.ParentificationTransformer),
                    e(o.ServiceIdentifiers.INodeGuard).to(c.BlackListObfuscatingGuard).inSingletonScope().whenTargetNamed(s.ObfuscatingGuard.BlackListNodeGuard),
                    e(o.ServiceIdentifiers.INodeGuard).to(u.ConditionalCommentObfuscatingGuard).inSingletonScope().whenTargetNamed(s.ObfuscatingGuard.ConditionalCommentNodeGuard),
                    e(o.ServiceIdentifiers.Factory__INodeGuard).toFactory(n.InversifyContainerFacade.getCacheFactory(o.ServiceIdentifiers.INodeGuard)),
                    e(o.ServiceIdentifiers.INodeTransformer).to(N.VariablePreserveTransformer).whenTargetNamed(i.NodeTransformer.VariablePreserveTransformer)
            }))
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(9),
                u = n = function () {
                    function e() {
                        (0, o.default)(this, e),
                        this.blackListGuardsLength = n.blackListGuards.length
                    }
                    return (0, i.default)(e, [{
                            key: "check",
                            value: function (e) {
                                for (var t = 0; t < this.blackListGuardsLength; t++)
                                    if (n.blackListGuards[t](e)) return !1;
                                return !0
                            }
                        }]),
                        e
                }();
            u.blackListGuards = [d.NodeGuards.isUseStrictOperator],
                u = n = s.__decorate([c.injectable(), s.__metadata("design:paramtypes", [])], u),
                t.BlackListObfuscatingGuard = u
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importStar(r(16)),
                m = r(12),
                g = r(13),
                N = r(9),
                v = r(59),
                y = n = function (e) {
                    function t(e, r) {
                        return (0, o.default)(this, t),
                            (0, s.default)(this, (0, c.default)(t).call(this, e, r))
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case m.TransformationStage.Initializing:
                                            return {
                                                leave:
                                                    function (e) {
                                                        if (N.NodeGuards.isProgramNode(e)) return t.transformNode(e)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e) {
                                    if (e.comments) {
                                        var t = this.transformComments(e.comments);
                                        p.traverse(e, {
                                                enter: function (e) {
                                                    if (0 !== t.length) {
                                                        var r = t.findIndex((function (t) {
                                                            return t.range && e.range && t.range[0] < e.range[0]
                                                        })); - 1 !== r && (e.leadingComments = t.splice(r, t.length - r).reverse())
                                                    }
                                                }
                                            }),
                                            t.length > 0 && (e.trailingComments = t.reverse())
                                    }
                                    return e
                                }
                            },
                            {
                                key: "transformComments",
                                value: function (e) {
                                    return e.filter((function (e) {
                                        return n.preservedWords.some((function (t) {
                                            return e.value.includes(t)
                                        })) || v.ConditionalCommentObfuscatingGuard.isConditionalComment(e)
                                    })).reverse()
                                }
                            }
                        ]),
                        t
                }(g.AbstractNodeTransformer);
            y.preservedWords = ["@license", "@preserve"],
                y = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Object, Object])], y),
                t.CommentsTransformer = y
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(26),
                p = r(12),
                m = r(13),
                g = r(9),
                N = function (e) {
                    function t(e, r, n, o, c) {
                        var d;
                        return (0, a.default)(this, t),
                            (d = (0, i.default)(this, (0, s.default)(t).call(this, o, c))).stackTraceData = [],
                            d.stackTraceAnalyzer = e,
                            d.obfuscationEventEmitter = r,
                            d.customNodeGroupStorage = n,
                            d
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case p.TransformationStage.Preparing:
                                            return {
                                                leave:
                                                    function (e, r) {
                                                        if (g.NodeGuards.isProgramNode(e)) return t.analyzeNode(e, r),
                                                            t.appendCustomNodesBeforeObfuscation(e, r),
                                                            t.transformNode(e, r)
                                                    }
                                            };
                                        case p.TransformationStage.Finalizing:
                                            return {
                                                leave:
                                                    function (e, r) {
                                                        g.NodeGuards.isProgramNode(e) && t.appendCustomNodesAfterObfuscation(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "analyzeNode",
                                value: function (e, t) {
                                    this.stackTraceData = this.stackTraceAnalyzer.analyze(e)
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    return e
                                }
                            },
                            {
                                key: "appendCustomNodesBeforeObfuscation",
                                value: function (e, t) {
                                    var r = this;
                                    this.customNodeGroupStorage.getStorage().forEach((function (e) {
                                            e.initialize(),
                                                r.obfuscationEventEmitter.once(e.getAppendEvent(), e.appendCustomNodes.bind(e))
                                        })),
                                        this.obfuscationEventEmitter.emit(f.ObfuscationEvent.BeforeObfuscation, e, this.stackTraceData)
                                }
                            },
                            {
                                key: "appendCustomNodesAfterObfuscation",
                                value: function (e, t) {
                                    this.obfuscationEventEmitter.emit(f.ObfuscationEvent.AfterObfuscation, e, this.stackTraceData)
                                }
                            }
                        ]),
                        t
                }(m.AbstractNodeTransformer);
            N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IStackTraceAnalyzer)), d.__param(1, u.inject(l.ServiceIdentifiers.IObfuscationEventEmitter)), d.__param(2, u.inject(l.ServiceIdentifiers.TCustomNodeGroupStorage)), d.__param(3, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(4, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object, Object, Object, Object, Object])], N),
                t.CustomNodesTransformer = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = u.__importDefault(r(174)),
                m = r(12),
                g = r(13),
                N = r(14),
                v = r(9),
                y = r(11),
                _ = n = function (e) {
                    function t(e, r) {
                        var n;
                        return (0, o.default)(this, t),
                            (n = (0, s.default)(this, (0, c.default)(t).call(this, e, r))).evalRootAstHostNodeSet = new Set,
                            n
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case m.TransformationStage.Preparing:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (r && v.NodeGuards.isCallExpressionNode(e) && v.NodeGuards.isIdentifierNode(e.callee) && "eval" === e.callee.name) return t.transformNode(e, r)
                                                    }
                                            };
                                        case m.TransformationStage.Finalizing:
                                            return this.evalRootAstHostNodeSet.size ? {
                                                leave: function (e, r) {
                                                    if (r && t.isEvalRootAstHostNode(e)) return t.restoreNode(e, r)
                                                }
                                            } : null;
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = e.arguments[0];
                                    if (!r) return e;
                                    var a, o = n.extractEvalStringFromCallExpressionArgument(r);
                                    if (!o) return e;
                                    try {
                                        a = y.NodeUtils.convertCodeToStructure(o)
                                    } catch (t) {
                                        return e
                                    }
                                    var i = N.NodeFactory.functionExpressionNode([], N.NodeFactory.blockStatementNode(a));
                                    return this.evalRootAstHostNodeSet.add(i),
                                        i
                                }
                            },
                            {
                                key: "restoreNode",
                                value: function (e, t) {
                                    var r = e.body.body,
                                        n = y.NodeUtils.convertStructureToCode(r);
                                    return N.NodeFactory.callExpressionNode(N.NodeFactory.identifierNode("eval"), [N.NodeFactory.literalNode(p.default(n))])
                                }
                            },
                            {
                                key: "isEvalRootAstHostNode",
                                value: function (e) {
                                    return v.NodeGuards.isFunctionExpressionNode(e) && this.evalRootAstHostNodeSet.has(e)
                                }
                            }
                        ], [{
                                key: "extractEvalStringFromCallExpressionArgument",
                                value: function (e) {
                                    return v.NodeGuards.isLiteralNode(e) ? n.extractEvalStringFromLiteralNode(e) : v.NodeGuards.isTemplateLiteralNode(e) ? n.extractEvalStringFromTemplateLiteralNode(e) : null
                                }
                            },
                            {
                                key: "extractEvalStringFromLiteralNode",
                                value: function (e) {
                                    return "string" == typeof e.value ? e.value : null
                                }
                            },
                            {
                                key: "extractEvalStringFromTemplateLiteralNode",
                                value: function (e) {
                                    var t = e.quasis;
                                    return 1 !== t.length || e.expressions.length ? null : t[0].value.cooked
                                }
                            }
                        ]),
                        t
                }(g.AbstractNodeTransformer);
            _ = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(1, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Object, Object])], _),
                t.EvalCallExpressionTransformer = _
        },
        function (e, t) {
            e.exports = require("js-string-escape")
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(12),
                p = r(13),
                m = r(9),
                g = r(17),
                N = function (e) {
                    function t(e, r) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case f.TransformationStage.Preparing:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    return g.NodeMetadata.set(e, {
                                            ignoredNode: !1
                                        }),
                                        m.NodeGuards.isIdentifierNode(e) && g.NodeMetadata.set(e, {
                                            renamedIdentifier: !1
                                        }),
                                        m.NodeGuards.isLiteralNode(e) && g.NodeMetadata.set(e, {
                                            replacedLiteral: !1
                                        }),
                                        e
                                }
                            }
                        ]),
                        t
                }(p.AbstractNodeTransformer);
            N = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object, Object])], N),
                t.MetadataTransformer = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = r(4),
                l = r(2),
                f = r(5),
                p = r(58),
                m = r(12),
                g = r(13),
                N = r(17),
                v = n = function (e) {
                    function t(e, r, a) {
                        var i;
                        return (0, o.default)(this, t),
                            (i = (0, s.default)(this, (0, c.default)(t).call(this, r, a))).obfuscatingGuards = n.obfuscatingGuardsList.map(e),
                            i
                    }
                    return (0, d.default)(t, e),
                        (0, i.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case m.TransformationStage.Preparing:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    var r = this.obfuscatingGuards.every((function (t) {
                                        return t.check(e)
                                    }));
                                    return N.NodeMetadata.set(e, {
                                            ignoredNode: !r
                                        }),
                                        e
                                }
                            }
                        ]),
                        t
                }(g.AbstractNodeTransformer);
            v.obfuscatingGuardsList = [p.ObfuscatingGuard.BlackListNodeGuard, p.ObfuscatingGuard.ConditionalCommentNodeGuard],
                v = n = u.__decorate([l.injectable(), u.__param(0, l.inject(f.ServiceIdentifiers.Factory__INodeGuard)), u.__param(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), u.__param(2, l.inject(f.ServiceIdentifiers.IOptions)), u.__metadata("design:paramtypes", [Function, Object, Object])], v),
                t.ObfuscatingGuardsTransformer = v
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(5),
                f = r(12),
                p = r(13),
                m = r(11),
                g = function (e) {
                    function t(e, r) {
                        return (0, a.default)(this, t),
                            (0, i.default)(this, (0, s.default)(t).call(this, e, r))
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case f.TransformationStage.Preparing:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    return m.NodeUtils.parentizeNode(e, t)
                                }
                            }
                        ]),
                        t
                }(p.AbstractNodeTransformer);
            g = d.__decorate([u.injectable(), d.__param(0, u.inject(l.ServiceIdentifiers.IRandomGenerator)), d.__param(1, u.inject(l.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Object, Object])], g),
                t.ParentificationTransformer = g
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3)),
                i = n(r(6)),
                s = n(r(7)),
                c = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = r(4),
                u = r(2),
                l = r(20),
                f = r(5),
                p = r(12),
                m = r(13),
                g = r(9),
                N = function (e) {
                    function t(e, r, n) {
                        var o;
                        return (0, a.default)(this, t),
                            (o = (0, i.default)(this, (0, s.default)(t).call(this, r, n))).identifierObfuscatingReplacer = e(l.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer),
                            o
                    }
                    return (0, c.default)(t, e),
                        (0, o.default)(t, [{
                                key: "getVisitor",
                                value: function (e) {
                                    var t = this;
                                    switch (e) {
                                        case p.TransformationStage.Preparing:
                                            return {
                                                enter:
                                                    function (e, r) {
                                                        if (g.NodeGuards.isIdentifierNode(e) && r && (g.NodeGuards.parentNodeIsPropertyNode(e, r) || g.NodeGuards.parentNodeIsMemberExpressionNode(e, r) || g.NodeGuards.parentNodeIsMethodDefinitionNode(e, r) || g.NodeGuards.isLabelIdentifierNode(e, r))) return t.transformNode(e, r)
                                                    }
                                            };
                                        default:
                                            return null
                                    }
                                }
                            },
                            {
                                key: "transformNode",
                                value: function (e, t) {
                                    return this.identifierObfuscatingReplacer.preserveName(e.name),
                                        e
                                }
                            }
                        ]),
                        t
                }(m.AbstractNodeTransformer);
            N = d.__decorate([u.injectable(), d.__param(0, u.inject(f.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d.__param(1, u.inject(f.ServiceIdentifiers.IRandomGenerator)), d.__param(2, u.inject(f.ServiceIdentifiers.IOptions)), d.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.VariablePreserveTransformer = N
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2),
                a = r(5),
                o = r(180),
                i = r(181),
                s = r(182);
            t.storagesModule = new n.ContainerModule((function (e) {
                e(a.ServiceIdentifiers.TCustomNodeGroupStorage).to(i.CustomNodeGroupStorage).inSingletonScope(),
                    e(a.ServiceIdentifiers.TStringArrayStorage).to(s.StringArrayStorage).inSingletonScope(),
                    e(a.ServiceIdentifiers.Newable__TControlFlowStorage).toConstructor(o.ControlFlowStorage),
                    e(a.ServiceIdentifiers.Factory__TControlFlowStorage).toFactory((function (e) {
                        return function () {
                            var t = new(e.container.get(a.ServiceIdentifiers.Newable__TControlFlowStorage))(e.container.get(a.ServiceIdentifiers.IRandomGenerator), e.container.get(a.ServiceIdentifiers.IOptions));
                            return t.initialize(),
                                t
                        }
                    }))
            }))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(6)),
                i = n(r(7)),
                s = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = r(4),
                d = r(2),
                u = r(5),
                l = function (e) {
                    function t(e, r) {
                        return (0, a.default)(this, t),
                            (0, o.default)(this, (0, i.default)(t).call(this, e, r))
                    }
                    return (0, s.default)(t, e),
                        t
                }(r(60).MapStorage);
            l = c.__decorate([d.injectable(), c.__param(0, d.inject(u.ServiceIdentifiers.IRandomGenerator)), c.__param(1, d.inject(u.ServiceIdentifiers.IOptions)), c.__metadata("design:paramtypes", [Object, Object])], l),
                t.ControlFlowStorage = l
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(39)),
                u = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = r(4),
                f = r(2),
                p = r(5),
                m = r(55),
                g = r(60),
                N = n = function (e) {
                    function t(e, r, n) {
                        var a;
                        return (0, o.default)(this, t),
                            (a = (0, s.default)(this, (0, c.default)(t).call(this, r, n))).customNodeGroupFactory = e,
                            a
                    }
                    return (0, u.default)(t, e),
                        (0, i.default)(t, [{
                            key: "initialize",
                            value: function () {
                                var e = this;
                                (0, d.default)((0, c.default)(t.prototype), "initialize", this).call(this),
                                    n.customNodeGroupsList.forEach((function (t) {
                                        var r = e.customNodeGroupFactory(t);
                                        r && e.storage.set(t, r)
                                    }))
                            }
                        }]),
                        t
                }(g.MapStorage);
            N.customNodeGroupsList = [m.CustomNodeGroup.ConsoleOutputCustomNodeGroup, m.CustomNodeGroup.DebugProtectionCustomNodeGroup, m.CustomNodeGroup.DomainLockCustomNodeGroup, m.CustomNodeGroup.SelfDefendingCustomNodeGroup, m.CustomNodeGroup.StringArrayCustomNodeGroup],
                l.__decorate([f.postConstruct(), l.__metadata("design:type", Function), l.__metadata("design:paramtypes", []), l.__metadata("design:returntype", void 0)], N.prototype, "initialize", null),
                N = n = l.__decorate([f.injectable(), l.__param(0, f.inject(p.ServiceIdentifiers.Factory__ICustomNodeGroup)), l.__param(1, f.inject(p.ServiceIdentifiers.IRandomGenerator)), l.__param(2, f.inject(p.ServiceIdentifiers.IOptions)), l.__metadata("design:paramtypes", [Function, Object, Object])], N),
                t.CustomNodeGroupStorage = N
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3)),
                s = a(r(6)),
                c = a(r(7)),
                d = a(r(39)),
                u = a(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = r(4),
                f = r(2),
                p = r(5),
                m = r(183),
                g = n = function (e) {
                    function t(e, r, n, a) {
                        var i;
                        return (0, o.default)(this, t),
                            (i = (0, s.default)(this, (0, c.default)(t).call(this, n, a))).identifierNamesGenerator = e(a),
                            i.arrayUtils = r,
                            i
                    }
                    return (0, u.default)(t, e),
                        (0, i.default)(t, [{
                                key: "initialize",
                                value: function () {
                                    (0, d.default)((0, c.default)(t.prototype), "initialize", this).call(this);
                                    var e = this.identifierNamesGenerator.generate(n.stringArrayNameLength),
                                        r = this.identifierNamesGenerator.generate(n.stringArrayNameLength),
                                        a = "".concat(this.options.identifiersPrefix).concat(e),
                                        o = "".concat(this.options.identifiersPrefix).concat(r);
                                    // console.log(e, r, a, o)

                                    this.storageId = "".concat(a, "|").concat(o)
                                }
                            },
                            {
                                key: "rotateArray",
                                value: function (e) {
                                    this.storage = this.arrayUtils.rotate(this.storage, e)
                                }
                            },
                            {
                                key: "toString",
                                value: function () {
                                    return this.storage.map((function (e) {
                                        return "'".concat(e, "'")
                                    })).toString()
                                }
                            }
                        ]),
                        t
                }(m.ArrayStorage);
            g.stringArrayNameLength = 7,
                l.__decorate([f.postConstruct(), l.__metadata("design:type", Function), l.__metadata("design:paramtypes", []), l.__metadata("design:returntype", void 0)], g.prototype, "initialize", null),
                g = n = l.__decorate([f.injectable(), l.__param(0, f.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l.__param(1, f.inject(p.ServiceIdentifiers.IArrayUtils)), l.__param(2, f.inject(p.ServiceIdentifiers.IRandomGenerator)), l.__param(3, f.inject(p.ServiceIdentifiers.IOptions)), l.__metadata("design:paramtypes", [Function, Object, Object, Object])], g),
                t.StringArrayStorage = g
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(28)),
                o = n(r(1)),
                i = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = r(10),
                l = function () {
                    function e(t, r) {
                        (0, o.default)(this, e),
                        this.storageLength = 0,
                            this.randomGenerator = t,
                            this.options = r
                    }
                    return (0, i.default)(e, [{
                                key: "initialize",
                                value: function () {
                                    this.storage = [],
                                        this.storageId = this.randomGenerator.getRandomString(6)
                                }
                            },
                            {
                                key: "get",
                                value: function (e) {
                                    var t = this.storage[e];
                                    if (!t) throw new Error("No value found in array storage with key `".concat(e, "`"));
                                    return t
                                }
                            },
                            {
                                key: "getKeyOf",
                                value: function (e) {
                                    var t = this.storage.indexOf(e);
                                    return t >= 0 ? t : null
                                }
                            },
                            {
                                key: "getLength",
                                value: function () {
                                    return this.storageLength
                                }
                            },
                            {
                                key: "getStorage",
                                value: function () {
                                    return this.storage
                                }
                            },
                            {
                                key: "getStorageId",
                                value: function () {
                                    return this.storageId
                                }
                            },
                            {
                                key: "mergeWith",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    this.storage = [].concat((0, a.default)(this.storage), (0, a.default)(e.getStorage())),
                                        t && (this.storageId = e.getStorageId())
                                }
                            },
                            {
                                key: "set",
                                value: function (e, t) {
                                    e === this.storageLength ? this.storage.push(t) : this.storage.splice(e, 0, t),
                                        this.storageLength++
                                }
                            }
                        ]),
                        e
                }();
            s.__decorate([u.initializable(), s.__metadata("design:type", Array)], l.prototype, "storage", void 0),
                s.__decorate([u.initializable(), s.__metadata("design:type", String)], l.prototype, "storageId", void 0),
                s.__decorate([c.postConstruct(), s.__metadata("design:type", Function), s.__metadata("design:paramtypes", []), s.__metadata("design:returntype", void 0)], l.prototype, "initialize", null),
                l = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s.__param(1, c.inject(d.ServiceIdentifiers.IOptions)), s.__metadata("design:paramtypes", [Object, Object])], l),
                t.ArrayStorage = l
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2),
                a = r(5),
                o = r(185),
                i = r(186),
                s = r(189),
                c = r(61);
            t.utilsModule = new n.ContainerModule((function (e) {
                e(a.ServiceIdentifiers.IArrayUtils).to(o.ArrayUtils).inSingletonScope(),
                    e(a.ServiceIdentifiers.IRandomGenerator).to(c.RandomGenerator).inSingletonScope(),
                    e(a.ServiceIdentifiers.ICryptUtils).to(i.CryptUtils).inSingletonScope(),
                    e(a.ServiceIdentifiers.IEscapeSequenceEncoder).to(s.EscapeSequenceEncoder).inSingletonScope()
            }))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(28)),
                o = n(r(1)),
                i = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = function () {
                    function e(t) {
                        (0, o.default)(this, e),
                        this.randomGenerator = t
                    }
                    return (0, i.default)(e, [{
                                key: "createWithRange",
                                value: function (e) {
                                    for (var t = [], r = 0; r < e; r++) t.push(r);
                                    return t
                                }
                            },
                            {
                                key: "rotate",
                                value: function (e, t) {
                                    if (!e.length) throw new ReferenceError("Cannot rotate empty array.");
                                    if (t <= 0) return e;
                                    for (var r, n = e; t--;)(r = n.pop()) && n.unshift(r);
                                    return n
                                }
                            },
                            {
                                key: "shuffle",
                                value: function (e) {
                                    for (var t = (0, a.default)(e), r = t.length; r; r--) {
                                        var n = Math.floor(this.randomGenerator.getMathRandom() * r),
                                            o = [t[n], t[r - 1]];
                                        t[r - 1] = o[0],
                                            t[n] = o[1]
                                    }
                                    return t
                                }
                            }
                        ]),
                        e
                }();
            u = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s.__metadata("design:paramtypes", [Object])], u),
                t.ArrayUtils = u
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4),
                s = r(2),
                c = r(5),
                d = r(61),
                u = r(34),
                l = function () {
                    function e(t) {
                        (0, a.default)(this, e),
                        this.randomGenerator = t
                    }
                    return (0, o.default)(e, [{
                                key: "btoa",
                                value: function (e) {
                                    var t = "";
                                    e = encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function (e, t) {
                                        return String.fromCharCode(parseInt("".concat(u.Utils.hexadecimalPrefix).concat(t)))
                                    }));
                                    for (var r, n, a = 0,
                                            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; e.charAt(0 | a) || (o = "=", a % 1); t += o.charAt(63 & r >> 8 - a % 1 * 8)) {
                                        if ((n = e.charCodeAt(a += .75)) > 255) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                                        r = r << 8 | n
                                    }
                                    // 处理上面的大数组
                                    bh++
                                    // bh_obj1[bhstr + fun10to64(bh)] = t
                                    function getRndInteger(min, max) {
                                        return Math.floor(Math.random() * (max - min)) + min;
                                    }
                                    let strNum = getRndInteger(1, t.length - 1)
                                    arr1.push(t.slice(0, strNum))
                                    arr2.push(t.slice(strNum, t.length))
                                    // console.log(t.slice(0,strNum))
                                    // console.log(t.slice(strNum,t.lngth))
                                    // return "thisIsFun"
                                    // allStr += `${bhstr + fun10to64(bh)}_:_${t}_&_`

                                    return `${strLeft}${arr1Str}[${bh-1}]+${arr2Str}[${bh-1}]${strRight}`
                                    // return `${strLeft + bhstr + fun10to64(bh) + strRight}`
                                    // return t
                                }
                            },
                            {
                                key: "hideString",
                                value: function (e, t) {
                                    var r = this,
                                        n = this.randomGenerator.getRandomGenerator().string({
                                            length: t,
                                            pool: d.RandomGenerator.randomGeneratorPool
                                        }).replace(new RegExp("[".concat(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "]"), "g"), ""),
                                        a = n.split("");
                                    return this.randomGenerator.getRandomGenerator().shuffle(a),
                                        [function (e, t) {
                                            for (var n = -1,
                                                    a = -1,
                                                    o = ""; n < e.length || a < t.length;) r.randomGenerator.getMathRandom() < .5 && a < t.length ? o += t.charAt(++a) : o += e.charAt(++n);
                                            return o
                                        }(e, n = a.join("")), n]
                                }
                            },
                            {
                                key: "rc4",
                                value: function (e, t) {
                                    for (var r, n = [], a = 0, o = "", i = 0; i < 256; i++) n[i] = i;
                                    for (i = 0; i < 256; i++) a = (a + n[i] + t.charCodeAt(i % t.length)) % 256,
                                        r = n[i],
                                        n[i] = n[a],
                                        n[a] = r;
                                    i = 0,
                                        a = 0;
                                    for (var s = 0; s < e.length; s++) a = (a + n[i = (i + 1) % 256]) % 256,
                                        r = n[i],
                                        n[i] = n[a],
                                        n[a] = r,
                                        o += String.fromCharCode(e.charCodeAt(s) ^ n[(n[i] + n[a]) % 256]);
                                    return o
                                }
                            }
                        ]),
                        e
                }();
            l = i.__decorate([s.injectable(), i.__param(0, s.inject(c.ServiceIdentifiers.IRandomGenerator)), i.__metadata("design:paramtypes", [Object])], l),
                t.CryptUtils = l
        },
        function (e, t) {
            e.exports = require("md5")
        },
        function (e, t) {
            e.exports = require("chance")
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4),
                s = r(2),
                c = function () {
                    function e() {
                        (0, a.default)(this, e),
                        this.stringsCache = new Map
                    }
                    return (0, o.default)(e, [{
                            key: "encode",
                            value: function (e, t) {
                                var r = "".concat(e, "-").concat(String(t));
                                if (this.stringsCache.has(r)) return this.stringsCache.get(r);
                                var n, a, o = new RegExp("[\\s\\S]", "g"),
                                    i = new RegExp("['\"\\\\\\s]"),
                                    s = new RegExp("[\\x00-\\x7F]"),
                                    c = e.replace(o, (function (e) {
                                        return t || i.exec(e) ? (s.exec(e) ? (n = "\\x", a = "00") : (n = "\\u", a = "0000"), "".concat(n).concat((a + e.charCodeAt(0).toString(16)).slice(-a.length))) : e
                                    }));
                                return this.stringsCache.set(r, c),
                                    c
                            }
                        }]),
                        e
                }();
            c = i.__decorate([s.injectable()], c),
                t.EscapeSequenceEncoder = c
        },
        function (e, t, r) {
            "use strict";
            var n, a = r(0),
                o = a(r(1)),
                i = a(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(4),
                c = r(2),
                d = r(5),
                u = s.__importStar(r(44)),
                l = r(191),
                f = r(29),
                p = r(12),
                m = r(192),
                g = r(9),
                N = n = function () {
                    function e(t, r, n, a, i) {
                        (0, o.default)(this, e),
                        this.transformersRunner = t,
                            this.randomGenerator = r,
                            this.obfuscatedCodeFactory = n,
                            this.logger = a,
                            this.options = i
                    }
                    return (0, i.default)(e, [{
                                key: "obfuscate",
                                value: function (e) {
                                    var t = Date.now();
                                    this.logger.info(l.LoggingMessage.Version, "0.18.8"),
                                        this.logger.info(l.LoggingMessage.ObfuscationStarted),
                                        this.logger.info(l.LoggingMessage.RandomGeneratorSeed, this.randomGenerator.getSeed());
                                    var r = this.parseCode(e),
                                        n = this.transformAstTree(r),
                                        a = this.generateCode(e, n),
                                        o = (Date.now() - t) / 1e3;
                                    return this.logger.success(l.LoggingMessage.ObfuscationCompleted, o),
                                        this.getObfuscatedCode(a)
                                }
                            },
                            {
                                key: "parseCode",
                                value: function (e) {
                                    return m.EspreeFacade.parse(e, n.espreeParseOptions)
                                }
                            },
                            {
                                key: "transformAstTree",
                                value: function (e) {
                                    return e = this.runTransformationStage(e, p.TransformationStage.Initializing),
                                        !g.NodeGuards.isProgramNode(e) || e.body.length || e.leadingComments || e.trailingComments ? (e = this.runTransformationStage(e, p.TransformationStage.Preparing), this.options.deadCodeInjection && (e = this.runTransformationStage(e, p.TransformationStage.DeadCodeInjection)), this.options.controlFlowFlattening && (e = this.runTransformationStage(e, p.TransformationStage.ControlFlowFlattening)), e = this.runTransformationStage(e, p.TransformationStage.Converting), e = this.runTransformationStage(e, p.TransformationStage.Obfuscating), e = this.runTransformationStage(e, p.TransformationStage.Finalizing)) : (this.logger.warn(l.LoggingMessage.EmptySourceCode), e)
                                }
                            },
                            {
                                key: "generateCode",
                                value: function (e, t) {
                                    var r = Object.assign({},
                                        n.escodegenParams);
                                    this.options.sourceMap && (r.sourceMap = this.options.inputFileName || "sourceMap", r.sourceContent = e);
                                    var a = u.generate(t, Object.assign(Object.assign({},
                                        r), {
                                        format: {
                                            compact: this.options.compact
                                        }
                                    }));
                                    return a.map = a.map ? a.map.toString() : "",
                                        a
                                }
                            },

                            {
                                key: "getObfuscatedCode",
                                value: function (e) {
                                    bhNum++
                                    if (bhNum == 3) {
                                        bhNum = 0
                                        // console.log('执行了一个文件')
                                        // 创建目录
                                        let dir
                                        let date
                                        if (this.options.isDelJsonList) {
                                            //要清空jsonList文件夹然后重新生成
                                            dir = `${outputFileName}`
                                            createDir(dir)
                                        } else {
                                            //不清空jsonList文件夹
                                            dir = `${outputFileName}/mj${this.options.mjNum}`
                                            date = `${dir}/${getToday()}`
                                            const str = outputFileName
                                            createDir(str)
                                            createDir(dir)
                                            createDir(date)
                                        }
                                        // let str2 = e.code.substr(0,e.code.indexOf(";")+1)
                                        // let endStr = str2.substr(str2.indexOf("=")+1,str2.indexOf(";")+1)
                                        // e.code = e.code.replace(endStr, "getAllArr(arr1, arr2);")

                                        // e.code = e.code.replace(new RegExp(`'${strLeft}`,'g'),`${replaceStr}.`).replace(new RegExp(`${strRight}'`,'g'),"")
                                        e.code = e.code.replace(new RegExp(`'${strLeft}`, 'g'), "").replace(new RegExp(`${strRight}'`, 'g'), "")
                                        // e.code += endStr
                                        if (fileNames.length == 0) fileNames = this.options.nameList
                                        let firstStr = `const {${arr1Str},${arr2Str},${downArr1Str},${downArr2Str}}=wx.${fileNames[fileNum]};${e.code}`
                                        // let startGameFn = `wx.getJsonToGame(wx.getJsonName('${fileNames[fileNum]}'),(resData)=>{putFirstStr})`
                                        // let FinnalStr = startGameFn.replace('putFirstStr', firstStr)
                                        e.code = firstStr
                                        bh_obj1[`${downArr1Str}`] = downArr1
                                        bh_obj1[`${downArr2Str}`] = downArr2
                                        bh_obj1[`${arr1Str}`] = arr1
                                        bh_obj1[`${arr2Str}`] = arr2

                                    
                                        fs.writeFile(`${date}/${fileNames[fileNum]}.json`, JSON.stringify(bh_obj1), function (error) {
                                            if (error) {
                                                console.log(error);
                                                return false;
                                            }
                                            // console.log('写入成功');
                                        })

                                        fileNum++
                                        bh = 0
                                        bh_obj1 = {}
                                        downArr1 = []
                                        downArr2 = []
                                        arr1 = []
                                        arr2 = []
                                        // allStr = ''
                                    }
                                    return this.obfuscatedCodeFactory(e.code, e.map)
                                }
                            },
                            {

                                key: "runTransformationStage",
                                value: function (e, t) {
                                    return this.logger.info(l.LoggingMessage.TransformationStage, t),
                                        this.transformersRunner.transform(e, n.transformersList, t)
                                }
                            }
                        ]),
                        e
                }();
            N.espreeParseOptions = {
                    comment: !0,
                    ecmaVersion: 10,
                    loc: !0,
                    range: !0
                },
                N.escodegenParams = {
                    comment: !0,
                    verbatim: "x-verbatim-property",
                    sourceMapWithCode: !0
                },
                N.transformersList = [f.NodeTransformer.BlockStatementControlFlowTransformer, f.NodeTransformer.ClassDeclarationTransformer, f.NodeTransformer.CommentsTransformer, f.NodeTransformer.CustomNodesTransformer, f.NodeTransformer.DeadCodeInjectionTransformer, f.NodeTransformer.EvalCallExpressionTransformer, f.NodeTransformer.FunctionControlFlowTransformer, f.NodeTransformer.CatchClauseTransformer, f.NodeTransformer.FunctionDeclarationTransformer, f.NodeTransformer.FunctionTransformer, f.NodeTransformer.ImportDeclarationTransformer, f.NodeTransformer.LabeledStatementTransformer, f.NodeTransformer.LiteralTransformer, f.NodeTransformer.MemberExpressionTransformer, f.NodeTransformer.MetadataTransformer, f.NodeTransformer.MethodDefinitionTransformer, f.NodeTransformer.ObfuscatingGuardsTransformer, f.NodeTransformer.ObjectExpressionKeysTransformer, f.NodeTransformer.ObjectExpressionTransformer, f.NodeTransformer.ParentificationTransformer, f.NodeTransformer.TemplateLiteralTransformer, f.NodeTransformer.VariableDeclarationTransformer, f.NodeTransformer.VariablePreserveTransformer],
                N = n = s.__decorate([c.injectable(), s.__param(0, c.inject(d.ServiceIdentifiers.ITransformersRunner)), s.__param(1, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s.__param(2, c.inject(d.ServiceIdentifiers.Factory__IObfuscatedCode)), s.__param(3, c.inject(d.ServiceIdentifiers.ILogger)), s.__param(4, c.inject(d.ServiceIdentifiers.IOptions)), s.__metadata("design:paramtypes", [Object, Object, Function, Object, Object])], N),
                t.JavaScriptObfuscator = N
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    console.log('开始')
                    e.EmptySourceCode = "Empty source code. Obfuscation canceled...",
                        e.ObfuscationCompleted = "Obfuscation completed. Total time: %s sec.",
                        e.ObfuscationStarted = "Obfuscation started...",
                        e.RandomGeneratorSeed = "Random generator seed: %s...",
                        e.TransformationStage = "Transformation stage: %s...",
                        e.Version = "Version: %s"
                }(t.LoggingMessage || (t.LoggingMessage = {}))
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4),
                s = i.__importStar(r(51)),
                c = i.__importDefault(r(62)),
                d = function () {
                    function e() {
                        (0, a.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                                key: "parse",
                                value: function (t, r) {
                                    for (var n = e.sourceTypes.length,
                                            a = 0; a < n; a++) try {
                                        return e.parseType(t, r, e.sourceTypes[a])
                                    } catch (r) {
                                        if (a < n - 1) continue;
                                        throw new Error(e.processParsingError(t, r.message, {
                                            line: r.lineNumber,
                                            column: r.column
                                        }))
                                    }
                                    throw new Error("Espree parsing error")
                                }
                            },
                            {
                                key: "parseType",
                                value: function (e, t, r) {
                                    var n = Object.assign(Object.assign({},
                                        t), {
                                        sourceType: r
                                    });
                                    return s.parse(e, n)
                                }
                            },
                            {
                                key: "processParsingError",
                                value: function (t, r, n) {
                                    if (!n || !n.line || !n.column) throw new Error(r);
                                    var a = t.split(/\r?\n/)[n.line - 1];
                                    if (!a) throw new Error(r);
                                    var o = Math.max(0, n.column - e.nearestSymbolsCount),
                                        i = Math.min(a.length, n.column + e.nearestSymbolsCount),
                                        s = e.colorError(">"),
                                        c = "...".concat(a.substring(o, i).replace(/^\s+/, ""), "...");
                                    throw new Error("Line ".concat(n.line, ": ").concat(r, "\n").concat(s, " ").concat(c))
                                }
                            }
                        ]),
                        e
                }();
            t.EspreeFacade = d,
                d.colorError = c.
            default.red,
                d.nearestSymbolsCount = 15,
                d.sourceTypes = ["script", "module"]
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(6)),
                i = n(r(7)),
                s = n(r(8));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = r(4),
                d = r(2),
                u = c.__importDefault(r(194));
            d.decorate(d.injectable(), u.default);
            var l = function (e) {
                function t() {
                    return (0, a.default)(this, t),
                        (0, o.default)(this, (0, i.default)(t).apply(this, arguments))
                }
                return (0, s.default)(t, e),
                    t
            }(u.default);
            l = c.__decorate([d.injectable()], l),
                t.ObfuscationEventEmitter = l
        },
        function (e, t) {
            e.exports = require("eventemitter3")
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4),
                s = r(2),
                c = r(5),
                d = r(10),
                u = r(36),
                l = function () {
                    function e(t, r) {
                        (0, a.default)(this, e),
                        this.cryptUtils = t,
                            this.options = r
                    }
                    return (0, o.default)(e, [{
                                key: "initialize",
                                value: function (e, t) {
                                    this.obfuscatedCode = e,
                                        this.sourceMap = t
                                }
                            },
                            {
                                key: "getObfuscatedCode",
                                value: function () {
                                    return this.correctObfuscatedCode()
                                }
                            },
                            {
                                key: "getSourceMap",
                                value: function () {
                                    return this.sourceMap
                                }
                            },
                            {
                                key: "toString",
                                value: function () {
                                    return this.obfuscatedCode
                                }
                            },
                            {
                                key: "correctObfuscatedCode",
                                value: function () {
                                    if (!this.sourceMap) return this.obfuscatedCode;
                                    var e = this.options.sourceMapBaseUrl + this.options.sourceMapFileName,
                                        t = "//# sourceMappingURL=";
                                    switch (this.options.sourceMapMode) {
                                        case u.SourceMapMode.Inline:
                                            t += "data:application/json;base64,".concat(this.cryptUtils.btoa(this.sourceMap));
                                            break;
                                        case u.SourceMapMode.Separate:
                                        default:
                                            if (!e) return this.obfuscatedCode;
                                            t += e
                                    }
                                    return "".concat(this.obfuscatedCode, "\n").concat(t)
                                }
                            }
                        ]),
                        e
                }();
            i.__decorate([d.initializable(), i.__metadata("design:type", String)], l.prototype, "obfuscatedCode", void 0),
                i.__decorate([d.initializable(), i.__metadata("design:type", String)], l.prototype, "sourceMap", void 0),
                l = i.__decorate([s.injectable(), i.__param(0, s.inject(c.ServiceIdentifiers.ICryptUtils)), i.__param(1, s.inject(c.ServiceIdentifiers.IOptions)), i.__metadata("design:paramtypes", [Object, Object])], l),
                t.ObfuscatedCode = l
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                function e(t, r) {
                    (0, a.default)(this, e),
                    this.sourceCode = t,
                        this.sourceMap = r
                }
                return (0, o.default)(e, [{
                            key: "getSourceCode",
                            value: function () {
                                return this.sourceCode
                            }
                        },
                        {
                            key: "getSourceMap",
                            value: function () {
                                return this.sourceMap
                            }
                        },
                        {
                            key: "toString",
                            value: function () {
                                return this.sourceCode
                            }
                        }
                    ]),
                    e
            }();
            t.SourceCode = i
        },
        function (e, t, r) {
            "use strict";
            var n = r(0),
                a = n(r(1)),
                o = n(r(3));
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4),
                s = r(2),
                c = r(5),
                d = i.__importStar(r(16)),
                u = r(198),
                l = r(9),
                f = r(17),
                p = function () {
                    function e(t) {
                        (0, a.default)(this, e),
                        this.nodeTransformerFactory = t
                    }
                    return (0, o.default)(e, [{
                                key: "transform",
                                value: function (e, t, r) {
                                    if (!t.length) return e;
                                    for (var n, a = [], o = [], i = t.length, s = 0; s < i; s++)(n = this.nodeTransformerFactory(t[s]).getVisitor(r)) && (n.enter && a.push({
                                        enter: n.enter
                                    }), n.leave && o.push({
                                        leave: n.leave
                                    }));
                                    return a.length || o.length ? (d.replace(e, {
                                        enter: this.mergeVisitorsForDirection(a, u.VisitorDirection.Enter),
                                        leave: this.mergeVisitorsForDirection(o, u.VisitorDirection.Leave)
                                    }), e) : e
                                }
                            },
                            {
                                key: "mergeVisitorsForDirection",
                                value: function (e, t) {
                                    var r = e.length;
                                    return r ?
                                        function (n, a) {
                                            if (f.NodeMetadata.isIgnoredNode(n)) return d.VisitorOption.Skip;
                                            for (var o = 0; o < r; o++) {
                                                var i = e[o][t];
                                                if (i) {
                                                    var s = i(n, a);
                                                    s && l.NodeGuards.isNode(s) && (n = s)
                                                }
                                            }
                                            return n
                                        } : function (e, t) {
                                            return e
                                        }
                                }
                            }
                        ]),
                        e
                }();
            p = i.__decorate([s.injectable(), i.__param(0, s.inject(c.ServiceIdentifiers.Factory__INodeTransformer)), i.__metadata("design:paramtypes", [Function])], p),
                t.TransformersRunner = p
        },
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e) {
                    e.Enter = "enter",
                        e.Leave = "leave"
                }(t.VisitorDirection || (t.VisitorDirection = {}))
        }, , , ,
        function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(32);
            e.exports = n.JavaScriptObfuscator
        }
    ]);
//# sourceMappingURL=index.js.map