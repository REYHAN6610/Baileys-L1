"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const WABinary_1 = require("../WABinary");
const Protocols_1 = require("./Protocols");

class USyncQuery {
    constructor() {
        this.protocols = [];
        this.users = [];
        this.context = 'interactive';
        this.mode = 'query';
    }
    
    withMode(mode) {
        this.mode = mode;
        return this;
    }
    
    withContext(context) {
        this.context = context;
        return this;
    }
    
    withUser(user) {
        this.users.push(user);
        return this;
    }
    
    parseUSyncQueryResult(result) {
        if (result.attrs.type !== 'result') {
            return;
        }
        
        const protocolMap = Object.fromEntries(this.protocols.map((protocol) => {
            return [protocol.name, protocol.parser];
        }));
        
        const queryResult = {
            list: [],
            sideList: [],
        };
        
        const usyncNode = WABinary_1.getBinaryNodeChild(result, 'usync');
        const listNode = WABinary_1.getBinaryNodeChild(usyncNode, 'list');
        
        if (Array.isArray(listNode?.content) && typeof listNode !== 'undefined') {
            queryResult.list = listNode.content.map((node) => {
                const id = node?.attrs?.jid;
                const data = Array.isArray(node?.content) ? Object.fromEntries(node.content.map((content) => {
                    const protocol = content.tag;
                    const parser = protocolMap[protocol];
                    return parser ? [protocol, parser(content)] : [protocol, null];
                }).filter(([, b]) => b !== null)) : {};
                return { ...data, id };
            });
        }
        
        return queryResult;
    }
    
    withLIDProtocol() {
        if (Protocols_1.USyncLIDProtocol) {
            this.protocols.push(new Protocols_1.USyncLIDProtocol());
        } else {
            console.error('');//Fixed By Reyhan
        }
        return this;
    }
    
    withDeviceProtocol() {
        if (Protocols_1.USyncDeviceProtocol) {
            this.protocols.push(new Protocols_1.USyncDeviceProtocol());
        }
        return this;
    }
    
    withContactProtocol() {
        if (Protocols_1.USyncContactProtocol) {
            this.protocols.push(new Protocols_1.USyncContactProtocol());
        }
        return this;
    }
    
    withStatusProtocol() {
        if (Protocols_1.USyncStatusProtocol) {
            this.protocols.push(new Protocols_1.USyncStatusProtocol());
        }
        return this;
    }
    
    withBotProfileProtocol() {
        if (Protocols_1.USyncBotProfileProtocol) {
            this.protocols.push(new Protocols_1.USyncBotProfileProtocol());
        }
        return this;
    }
    
    withDisappearingModeProtocol() {
        if (Protocols_1.USyncDisappearingModeProtocol) {
            this.protocols.push(new Protocols_1.USyncDisappearingModeProtocol());
        }
        return this;
    }
}

exports.USyncQuery = USyncQuery;