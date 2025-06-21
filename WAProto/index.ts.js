"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = void 0;
/** Namespace proto. */
var proto;
(function (proto) {
    /** Represents a ADVDeviceIdentity. */
    class ADVDeviceIdentity {
    }
    /** ADVEncryptionType enum. */
    let ADVEncryptionType;
    (function (ADVEncryptionType) {
        ADVEncryptionType[ADVEncryptionType["E2EE"] = 0] = "E2EE";
        ADVEncryptionType[ADVEncryptionType["HOSTED"] = 1] = "HOSTED";
    })(ADVEncryptionType || (ADVEncryptionType = {}));
    /** Represents a ADVKeyIndexList. */
    class ADVKeyIndexList {
    }
    /** Represents a ADVSignedDeviceIdentity. */
    class ADVSignedDeviceIdentity {
    }
    /** Represents a ADVSignedDeviceIdentityHMAC. */
    class ADVSignedDeviceIdentityHMAC {
    }
    /** Represents a ADVSignedKeyIndexList. */
    class ADVSignedKeyIndexList {
    }
    /** Represents a AIQueryFanout. */
    class AIQueryFanout {
    }
    /** Represents a AIRichResponseMessage. */
    class AIRichResponseMessage {
    }
    (function (AIRichResponseMessage) {
        /** Represents a AIRichResponseCodeMetadata. */
        class AIRichResponseCodeMetadata {
        }
        (function (AIRichResponseCodeMetadata) {
            /** Represents a AIRichResponseCodeBlock. */
            class AIRichResponseCodeBlock {
            }
            /** AIRichResponseCodeHighlightType enum. */
            let AIRichResponseCodeHighlightType;
            (function (AIRichResponseCodeHighlightType) {
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT"] = 0] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD"] = 1] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD"] = 2] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING"] = 3] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER"] = 4] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT"] = 5] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT";
            })(AIRichResponseCodeHighlightType || (AIRichResponseCodeHighlightType = {}));
        })(AIRichResponseCodeMetadata || (AIRichResponseCodeMetadata = {}));
        /** Represents a AIRichResponseContentItemsMetadata. */
        class AIRichResponseContentItemsMetadata {
        }
        (function (AIRichResponseContentItemsMetadata) {
            /** Represents a AIRichResponseContentItemMetadata. */
            class AIRichResponseContentItemMetadata {
            }
            /** Represents a AIRichResponseReelItem. */
            class AIRichResponseReelItem {
            }
            /** ContentType enum. */
            let ContentType;
            (function (ContentType) {
                ContentType[ContentType["DEFAULT"] = 0] = "DEFAULT";
                ContentType[ContentType["CAROUSEL"] = 1] = "CAROUSEL";
            })(ContentType || (ContentType = {}));
        })(AIRichResponseContentItemsMetadata || (AIRichResponseContentItemsMetadata = {}));
        /** Represents a AIRichResponseDynamicMetadata. */
        class AIRichResponseDynamicMetadata {
        }
        (function (AIRichResponseDynamicMetadata) {
            /** AIRichResponseDynamicMetadataType enum. */
            let AIRichResponseDynamicMetadataType;
            (function (AIRichResponseDynamicMetadataType) {
                AIRichResponseDynamicMetadataType[AIRichResponseDynamicMetadataType["AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN"] = 0] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN";
                AIRichResponseDynamicMetadataType[AIRichResponseDynamicMetadataType["AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE"] = 1] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE";
                AIRichResponseDynamicMetadataType[AIRichResponseDynamicMetadataType["AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF"] = 2] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF";
            })(AIRichResponseDynamicMetadataType || (AIRichResponseDynamicMetadataType = {}));
        })(AIRichResponseDynamicMetadata || (AIRichResponseDynamicMetadata = {}));
        /** Represents a AIRichResponseGridImageMetadata. */
        class AIRichResponseGridImageMetadata {
        }
        /** Represents a AIRichResponseImageURL. */
        class AIRichResponseImageURL {
        }
        /** Represents a AIRichResponseInlineImageMetadata. */
        class AIRichResponseInlineImageMetadata {
        }
        (function (AIRichResponseInlineImageMetadata) {
            /** AIRichResponseImageAlignment enum. */
            let AIRichResponseImageAlignment;
            (function (AIRichResponseImageAlignment) {
                AIRichResponseImageAlignment[AIRichResponseImageAlignment["AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED"] = 0] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED";
                AIRichResponseImageAlignment[AIRichResponseImageAlignment["AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED"] = 1] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED";
                AIRichResponseImageAlignment[AIRichResponseImageAlignment["AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED"] = 2] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED";
            })(AIRichResponseImageAlignment || (AIRichResponseImageAlignment = {}));
        })(AIRichResponseInlineImageMetadata || (AIRichResponseInlineImageMetadata = {}));
        /** Represents a AIRichResponseLatexMetadata. */
        class AIRichResponseLatexMetadata {
        }
        (function (AIRichResponseLatexMetadata) {
            /** Represents a AIRichResponseLatexExpression. */
            class AIRichResponseLatexExpression {
            }
        })(AIRichResponseLatexMetadata || (AIRichResponseLatexMetadata = {}));
        /** Represents a AIRichResponseMapMetadata. */
        class AIRichResponseMapMetadata {
        }
        (function (AIRichResponseMapMetadata) {
            /** Represents a AIRichResponseMapAnnotation. */
            class AIRichResponseMapAnnotation {
            }
        })(AIRichResponseMapMetadata || (AIRichResponseMapMetadata = {}));
        /** AIRichResponseMessageType enum. */
        let AIRichResponseMessageType;
        (function (AIRichResponseMessageType) {
            AIRichResponseMessageType[AIRichResponseMessageType["AI_RICH_RESPONSE_TYPE_UNKNOWN"] = 0] = "AI_RICH_RESPONSE_TYPE_UNKNOWN";
            AIRichResponseMessageType[AIRichResponseMessageType["AI_RICH_RESPONSE_TYPE_STANDARD"] = 1] = "AI_RICH_RESPONSE_TYPE_STANDARD";
        })(AIRichResponseMessageType || (AIRichResponseMessageType = {}));
        /** Represents a AIRichResponseSubMessage. */
        class AIRichResponseSubMessage {
        }
        /** AIRichResponseSubMessageType enum. */
        let AIRichResponseSubMessageType;
        (function (AIRichResponseSubMessageType) {
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_UNKNOWN"] = 0] = "AI_RICH_RESPONSE_UNKNOWN";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_GRID_IMAGE"] = 1] = "AI_RICH_RESPONSE_GRID_IMAGE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_TEXT"] = 2] = "AI_RICH_RESPONSE_TEXT";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_INLINE_IMAGE"] = 3] = "AI_RICH_RESPONSE_INLINE_IMAGE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_TABLE"] = 4] = "AI_RICH_RESPONSE_TABLE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_CODE"] = 5] = "AI_RICH_RESPONSE_CODE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_DYNAMIC"] = 6] = "AI_RICH_RESPONSE_DYNAMIC";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_MAP"] = 7] = "AI_RICH_RESPONSE_MAP";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_LATEX"] = 8] = "AI_RICH_RESPONSE_LATEX";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_CONTENT_ITEMS"] = 9] = "AI_RICH_RESPONSE_CONTENT_ITEMS";
        })(AIRichResponseSubMessageType || (AIRichResponseSubMessageType = {}));
        /** Represents a AIRichResponseTableMetadata. */
        class AIRichResponseTableMetadata {
        }
        (function (AIRichResponseTableMetadata) {
            /** Represents a AIRichResponseTableRow. */
            class AIRichResponseTableRow {
            }
        })(AIRichResponseTableMetadata || (AIRichResponseTableMetadata = {}));
        /** Represents a AIRichResponseUnifiedResponse. */
        class AIRichResponseUnifiedResponse {
        }
    })(AIRichResponseMessage || (AIRichResponseMessage = {}));
    /** Represents an Account. */
    class Account {
    }
    /** Represents an ActionLink. */
    class ActionLink {
    }
    /** Represents an AutoDownloadSettings. */
    class AutoDownloadSettings {
    }
    /** Represents an AvatarUserSettings. */
    class AvatarUserSettings {
    }
    /** Represents a BizAccountLinkInfo. */
    class BizAccountLinkInfo {
    }
    (function (BizAccountLinkInfo) {
        /** AccountType enum. */
        let AccountType;
        (function (AccountType) {
            AccountType[AccountType["ENTERPRISE"] = 0] = "ENTERPRISE";
        })(AccountType || (AccountType = {}));
        /** HostStorageType enum. */
        let HostStorageType;
        (function (HostStorageType) {
            HostStorageType[HostStorageType["ON_PREMISE"] = 0] = "ON_PREMISE";
            HostStorageType[HostStorageType["FACEBOOK"] = 1] = "FACEBOOK";
        })(HostStorageType || (HostStorageType = {}));
    })(BizAccountLinkInfo || (BizAccountLinkInfo = {}));
    /** Represents a BizAccountPayload. */
    class BizAccountPayload {
    }
    /** Represents a BizIdentityInfo. */
    class BizIdentityInfo {
    }
    (function (BizIdentityInfo) {
        /** ActualActorsType enum. */
        let ActualActorsType;
        (function (ActualActorsType) {
            ActualActorsType[ActualActorsType["SELF"] = 0] = "SELF";
            ActualActorsType[ActualActorsType["BSP"] = 1] = "BSP";
        })(ActualActorsType || (ActualActorsType = {}));
        /** HostStorageType enum. */
        let HostStorageType;
        (function (HostStorageType) {
            HostStorageType[HostStorageType["ON_PREMISE"] = 0] = "ON_PREMISE";
            HostStorageType[HostStorageType["FACEBOOK"] = 1] = "FACEBOOK";
        })(HostStorageType || (HostStorageType = {}));
        /** VerifiedLevelValue enum. */
        let VerifiedLevelValue;
        (function (VerifiedLevelValue) {
            VerifiedLevelValue[VerifiedLevelValue["UNKNOWN"] = 0] = "UNKNOWN";
            VerifiedLevelValue[VerifiedLevelValue["LOW"] = 1] = "LOW";
            VerifiedLevelValue[VerifiedLevelValue["HIGH"] = 2] = "HIGH";
        })(VerifiedLevelValue || (VerifiedLevelValue = {}));
    })(BizIdentityInfo || (BizIdentityInfo = {}));
    /** Represents a BotAgeCollectionMetadata. */
    class BotAgeCollectionMetadata {
    }
    /** Represents a BotAvatarMetadata. */
    class BotAvatarMetadata {
    }
    /** Represents a BotCapabilityMetadata. */
    class BotCapabilityMetadata {
    }
    (function (BotCapabilityMetadata) {
        /** BotCapabilityType enum. */
        let BotCapabilityType;
        (function (BotCapabilityType) {
            BotCapabilityType[BotCapabilityType["UNKNOWN"] = 0] = "UNKNOWN";
            BotCapabilityType[BotCapabilityType["PROGRESS_INDICATOR"] = 1] = "PROGRESS_INDICATOR";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_HEADING"] = 2] = "RICH_RESPONSE_HEADING";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_NESTED_LIST"] = 3] = "RICH_RESPONSE_NESTED_LIST";
            BotCapabilityType[BotCapabilityType["AI_MEMORY"] = 4] = "AI_MEMORY";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_THREAD_SURFING"] = 5] = "RICH_RESPONSE_THREAD_SURFING";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_TABLE"] = 6] = "RICH_RESPONSE_TABLE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_CODE"] = 7] = "RICH_RESPONSE_CODE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_STRUCTURED_RESPONSE"] = 8] = "RICH_RESPONSE_STRUCTURED_RESPONSE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_INLINE_IMAGE"] = 9] = "RICH_RESPONSE_INLINE_IMAGE";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_CONTROL"] = 10] = "WA_IG_1P_PLUGIN_RANKING_CONTROL";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_1"] = 11] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_1";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_2"] = 12] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_2";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_3"] = 13] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_3";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_4"] = 14] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_4";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_5"] = 15] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_5";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_6"] = 16] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_6";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_7"] = 17] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_7";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_8"] = 18] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_8";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_9"] = 19] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_9";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_10"] = 20] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_10";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_SUB_HEADING"] = 21] = "RICH_RESPONSE_SUB_HEADING";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_GRID_IMAGE"] = 22] = "RICH_RESPONSE_GRID_IMAGE";
            BotCapabilityType[BotCapabilityType["AI_STUDIO_UGC_MEMORY"] = 23] = "AI_STUDIO_UGC_MEMORY";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_LATEX"] = 24] = "RICH_RESPONSE_LATEX";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_MAPS"] = 25] = "RICH_RESPONSE_MAPS";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_INLINE_REELS"] = 26] = "RICH_RESPONSE_INLINE_REELS";
            BotCapabilityType[BotCapabilityType["AGENTIC_PLANNING"] = 27] = "AGENTIC_PLANNING";
            BotCapabilityType[BotCapabilityType["ACCOUNT_LINKING"] = 28] = "ACCOUNT_LINKING";
            BotCapabilityType[BotCapabilityType["STREAMING_DISAGGREGATION"] = 29] = "STREAMING_DISAGGREGATION";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_GRID_IMAGE_3P"] = 30] = "RICH_RESPONSE_GRID_IMAGE_3P";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_LATEX_INLINE"] = 31] = "RICH_RESPONSE_LATEX_INLINE";
            BotCapabilityType[BotCapabilityType["QUERY_PLAN"] = 32] = "QUERY_PLAN";
            BotCapabilityType[BotCapabilityType["PROACTIVE_MESSAGE"] = 33] = "PROACTIVE_MESSAGE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_UNIFIED_RESPONSE"] = 34] = "RICH_RESPONSE_UNIFIED_RESPONSE";
            BotCapabilityType[BotCapabilityType["PROMOTION_MESSAGE"] = 35] = "PROMOTION_MESSAGE";
        })(BotCapabilityType || (BotCapabilityType = {}));
    })(BotCapabilityMetadata || (BotCapabilityMetadata = {}));
    /** Represents a BotImagineMetadata. */
    class BotImagineMetadata {
    }
    (function (BotImagineMetadata) {
        /** ImagineType enum. */
        let ImagineType;
        (function (ImagineType) {
            ImagineType[ImagineType["UNKNOWN"] = 0] = "UNKNOWN";
            ImagineType[ImagineType["IMAGINE"] = 1] = "IMAGINE";
            ImagineType[ImagineType["MEMU"] = 2] = "MEMU";
            ImagineType[ImagineType["FLASH"] = 3] = "FLASH";
            ImagineType[ImagineType["EDIT"] = 4] = "EDIT";
        })(ImagineType || (ImagineType = {}));
    })(BotImagineMetadata || (BotImagineMetadata = {}));
    /** Represents a BotLinkedAccount. */
    class BotLinkedAccount {
    }
    (function (BotLinkedAccount) {
        /** BotLinkedAccountType enum. */
        let BotLinkedAccountType;
        (function (BotLinkedAccountType) {
            BotLinkedAccountType[BotLinkedAccountType["BOT_LINKED_ACCOUNT_TYPE_1P"] = 0] = "BOT_LINKED_ACCOUNT_TYPE_1P";
        })(BotLinkedAccountType || (BotLinkedAccountType = {}));
    })(BotLinkedAccount || (BotLinkedAccount = {}));
    /** Represents a BotLinkedAccountsMetadata. */
    class BotLinkedAccountsMetadata {
    }
    /** Represents a BotMediaMetadata. */
    class BotMediaMetadata {
    }
    (function (BotMediaMetadata) {
        /** OrientationType enum. */
        let OrientationType;
        (function (OrientationType) {
            OrientationType[OrientationType["CENTER"] = 1] = "CENTER";
            OrientationType[OrientationType["LEFT"] = 2] = "LEFT";
            OrientationType[OrientationType["RIGHT"] = 3] = "RIGHT";
        })(OrientationType || (OrientationType = {}));
    })(BotMediaMetadata || (BotMediaMetadata = {}));
    /** Represents a BotMemoryFact. */
    class BotMemoryFact {
    }
    /** Represents a BotMemoryMetadata. */
    class BotMemoryMetadata {
    }
    /** Represents a BotMemuMetadata. */
    class BotMemuMetadata {
    }
    /** Represents a BotMetadata. */
    class BotMetadata {
    }
    /** BotMetricsEntryPoint enum. */
    let BotMetricsEntryPoint;
    (function (BotMetricsEntryPoint) {
        BotMetricsEntryPoint[BotMetricsEntryPoint["FAVICON"] = 1] = "FAVICON";
        BotMetricsEntryPoint[BotMetricsEntryPoint["CHATLIST"] = 2] = "CHATLIST";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_NULL_STATE_PAPER_PLANE"] = 3] = "AISEARCH_NULL_STATE_PAPER_PLANE";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_NULL_STATE_SUGGESTION"] = 4] = "AISEARCH_NULL_STATE_SUGGESTION";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_SUGGESTION"] = 5] = "AISEARCH_TYPE_AHEAD_SUGGESTION";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_PAPER_PLANE"] = 6] = "AISEARCH_TYPE_AHEAD_PAPER_PLANE";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_RESULT_CHATLIST"] = 7] = "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_RESULT_MESSAGES"] = 8] = "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AIVOICE_SEARCH_BAR"] = 9] = "AIVOICE_SEARCH_BAR";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AIVOICE_FAVICON"] = 10] = "AIVOICE_FAVICON";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISTUDIO"] = 11] = "AISTUDIO";
        BotMetricsEntryPoint[BotMetricsEntryPoint["DEEPLINK"] = 12] = "DEEPLINK";
        BotMetricsEntryPoint[BotMetricsEntryPoint["NOTIFICATION"] = 13] = "NOTIFICATION";
        BotMetricsEntryPoint[BotMetricsEntryPoint["PROFILE_MESSAGE_BUTTON"] = 14] = "PROFILE_MESSAGE_BUTTON";
        BotMetricsEntryPoint[BotMetricsEntryPoint["FORWARD"] = 15] = "FORWARD";
        BotMetricsEntryPoint[BotMetricsEntryPoint["APP_SHORTCUT"] = 16] = "APP_SHORTCUT";
        BotMetricsEntryPoint[BotMetricsEntryPoint["FF_FAMILY"] = 17] = "FF_FAMILY";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_TAB"] = 18] = "AI_TAB";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_HOME"] = 19] = "AI_HOME";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_DEEPLINK_IMMERSIVE"] = 20] = "AI_DEEPLINK_IMMERSIVE";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_DEEPLINK"] = 21] = "AI_DEEPLINK";
        BotMetricsEntryPoint[BotMetricsEntryPoint["META_AI_CHAT_SHORTCUT_AI_STUDIO"] = 22] = "META_AI_CHAT_SHORTCUT_AI_STUDIO";
        BotMetricsEntryPoint[BotMetricsEntryPoint["UGC_CHAT_SHORTCUT_AI_STUDIO"] = 23] = "UGC_CHAT_SHORTCUT_AI_STUDIO";
        BotMetricsEntryPoint[BotMetricsEntryPoint["NEW_CHAT_AI_STUDIO"] = 24] = "NEW_CHAT_AI_STUDIO";
    })(BotMetricsEntryPoint || (BotMetricsEntryPoint = {}));
    /** Represents a BotMetricsMetadata. */
    class BotMetricsMetadata {
    }
    /** BotMetricsThreadEntryPoint enum. */
    let BotMetricsThreadEntryPoint;
    (function (BotMetricsThreadEntryPoint) {
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_TAB_THREAD"] = 1] = "AI_TAB_THREAD";
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_HOME_THREAD"] = 2] = "AI_HOME_THREAD";
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_DEEPLINK_IMMERSIVE_THREAD"] = 3] = "AI_DEEPLINK_IMMERSIVE_THREAD";
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_DEEPLINK_THREAD"] = 4] = "AI_DEEPLINK_THREAD";
    })(BotMetricsThreadEntryPoint || (BotMetricsThreadEntryPoint = {}));
    /** Represents a BotModeSelectionMetadata. */
    class BotModeSelectionMetadata {
    }
    (function (BotModeSelectionMetadata) {
        /** BotUserSelectionMode enum. */
        let BotUserSelectionMode;
        (function (BotUserSelectionMode) {
            BotUserSelectionMode[BotUserSelectionMode["UNKNOWN_MODE"] = 0] = "UNKNOWN_MODE";
            BotUserSelectionMode[BotUserSelectionMode["REASONING_MODE"] = 1] = "REASONING_MODE";
        })(BotUserSelectionMode || (BotUserSelectionMode = {}));
    })(BotModeSelectionMetadata || (BotModeSelectionMetadata = {}));
    /** Represents a BotModelMetadata. */
    class BotModelMetadata {
    }
    (function (BotModelMetadata) {
        /** ModelType enum. */
        let ModelType;
        (function (ModelType) {
            ModelType[ModelType["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
            ModelType[ModelType["LLAMA_PROD"] = 1] = "LLAMA_PROD";
            ModelType[ModelType["LLAMA_PROD_PREMIUM"] = 2] = "LLAMA_PROD_PREMIUM";
        })(ModelType || (ModelType = {}));
        /** PremiumModelStatus enum. */
        let PremiumModelStatus;
        (function (PremiumModelStatus) {
            PremiumModelStatus[PremiumModelStatus["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
            PremiumModelStatus[PremiumModelStatus["AVAILABLE"] = 1] = "AVAILABLE";
            PremiumModelStatus[PremiumModelStatus["QUOTA_EXCEED_LIMIT"] = 2] = "QUOTA_EXCEED_LIMIT";
        })(PremiumModelStatus || (PremiumModelStatus = {}));
    })(BotModelMetadata || (BotModelMetadata = {}));
    /** Represents a BotPluginMetadata. */
    class BotPluginMetadata {
    }
    (function (BotPluginMetadata) {
        /** PluginType enum. */
        let PluginType;
        (function (PluginType) {
            PluginType[PluginType["UNKNOWN_PLUGIN"] = 0] = "UNKNOWN_PLUGIN";
            PluginType[PluginType["REELS"] = 1] = "REELS";
            PluginType[PluginType["SEARCH"] = 2] = "SEARCH";
        })(PluginType || (PluginType = {}));
        /** SearchProvider enum. */
        let SearchProvider;
        (function (SearchProvider) {
            SearchProvider[SearchProvider["UNKNOWN"] = 0] = "UNKNOWN";
            SearchProvider[SearchProvider["BING"] = 1] = "BING";
            SearchProvider[SearchProvider["GOOGLE"] = 2] = "GOOGLE";
            SearchProvider[SearchProvider["SUPPORT"] = 3] = "SUPPORT";
        })(SearchProvider || (SearchProvider = {}));
    })(BotPluginMetadata || (BotPluginMetadata = {}));
    /** Represents a BotProgressIndicatorMetadata. */
    class BotProgressIndicatorMetadata {
    }
    (function (BotProgressIndicatorMetadata) {
        /** Represents a BotPlanningStepMetadata. */
        class BotPlanningStepMetadata {
        }
        (function (BotPlanningStepMetadata) {
            /** Represents a BotPlanningSearchSourceMetadata. */
            class BotPlanningSearchSourceMetadata {
            }
            /** Represents a BotPlanningSearchSourcesMetadata. */
            class BotPlanningSearchSourcesMetadata {
            }
            (function (BotPlanningSearchSourcesMetadata) {
                /** BotPlanningSearchSourceProvider enum. */
                let BotPlanningSearchSourceProvider;
                (function (BotPlanningSearchSourceProvider) {
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["UNKNOWN"] = 0] = "UNKNOWN";
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["OTHER"] = 1] = "OTHER";
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["GOOGLE"] = 2] = "GOOGLE";
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["BING"] = 3] = "BING";
                })(BotPlanningSearchSourceProvider || (BotPlanningSearchSourceProvider = {}));
            })(BotPlanningSearchSourcesMetadata || (BotPlanningSearchSourcesMetadata = {}));
            /** Represents a BotPlanningStepSectionMetadata. */
            class BotPlanningStepSectionMetadata {
            }
            /** BotSearchSourceProvider enum. */
            let BotSearchSourceProvider;
            (function (BotSearchSourceProvider) {
                BotSearchSourceProvider[BotSearchSourceProvider["UNKNOWN_PROVIDER"] = 0] = "UNKNOWN_PROVIDER";
                BotSearchSourceProvider[BotSearchSourceProvider["OTHER"] = 1] = "OTHER";
                BotSearchSourceProvider[BotSearchSourceProvider["GOOGLE"] = 2] = "GOOGLE";
                BotSearchSourceProvider[BotSearchSourceProvider["BING"] = 3] = "BING";
            })(BotSearchSourceProvider || (BotSearchSourceProvider = {}));
            /** PlanningStepStatus enum. */
            let PlanningStepStatus;
            (function (PlanningStepStatus) {
                PlanningStepStatus[PlanningStepStatus["UNKNOWN"] = 0] = "UNKNOWN";
                PlanningStepStatus[PlanningStepStatus["PLANNED"] = 1] = "PLANNED";
                PlanningStepStatus[PlanningStepStatus["EXECUTING"] = 2] = "EXECUTING";
                PlanningStepStatus[PlanningStepStatus["FINISHED"] = 3] = "FINISHED";
            })(PlanningStepStatus || (PlanningStepStatus = {}));
        })(BotPlanningStepMetadata || (BotPlanningStepMetadata = {}));
    })(BotProgressIndicatorMetadata || (BotProgressIndicatorMetadata = {}));
    /** Represents a BotPromotionMessageMetadata. */
    class BotPromotionMessageMetadata {
    }
    (function (BotPromotionMessageMetadata) {
        /** BotPromotionType enum. */
        let BotPromotionType;
        (function (BotPromotionType) {
            BotPromotionType[BotPromotionType["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
            BotPromotionType[BotPromotionType["C50"] = 1] = "C50";
        })(BotPromotionType || (BotPromotionType = {}));
    })(BotPromotionMessageMetadata || (BotPromotionMessageMetadata = {}));
    /** Represents a BotPromptSuggestion. */
    class BotPromptSuggestion {
    }
    /** Represents a BotPromptSuggestions. */
    class BotPromptSuggestions {
    }
    /** Represents a BotQuotaMetadata. */
    class BotQuotaMetadata {
    }
    (function (BotQuotaMetadata) {
        /** Represents a BotFeatureQuotaMetadata. */
        class BotFeatureQuotaMetadata {
        }
        (function (BotFeatureQuotaMetadata) {
            /** BotFeatureType enum. */
            let BotFeatureType;
            (function (BotFeatureType) {
                BotFeatureType[BotFeatureType["UNKNOWN_FEATURE"] = 0] = "UNKNOWN_FEATURE";
                BotFeatureType[BotFeatureType["REASONING_FEATURE"] = 1] = "REASONING_FEATURE";
            })(BotFeatureType || (BotFeatureType = {}));
        })(BotFeatureQuotaMetadata || (BotFeatureQuotaMetadata = {}));
    })(BotQuotaMetadata || (BotQuotaMetadata = {}));
    /** Represents a BotReminderMetadata. */
    class BotReminderMetadata {
    }
    (function (BotReminderMetadata) {
        /** ReminderAction enum. */
        let ReminderAction;
        (function (ReminderAction) {
            ReminderAction[ReminderAction["NOTIFY"] = 1] = "NOTIFY";
            ReminderAction[ReminderAction["CREATE"] = 2] = "CREATE";
            ReminderAction[ReminderAction["DELETE"] = 3] = "DELETE";
            ReminderAction[ReminderAction["UPDATE"] = 4] = "UPDATE";
        })(ReminderAction || (ReminderAction = {}));
        /** ReminderFrequency enum. */
        let ReminderFrequency;
        (function (ReminderFrequency) {
            ReminderFrequency[ReminderFrequency["ONCE"] = 1] = "ONCE";
            ReminderFrequency[ReminderFrequency["DAILY"] = 2] = "DAILY";
            ReminderFrequency[ReminderFrequency["WEEKLY"] = 3] = "WEEKLY";
            ReminderFrequency[ReminderFrequency["BIWEEKLY"] = 4] = "BIWEEKLY";
            ReminderFrequency[ReminderFrequency["MONTHLY"] = 5] = "MONTHLY";
        })(ReminderFrequency || (ReminderFrequency = {}));
    })(BotReminderMetadata || (BotReminderMetadata = {}));
    /** Represents a BotRenderingMetadata. */
    class BotRenderingMetadata {
    }
    (function (BotRenderingMetadata) {
        /** Represents a Keyword. */
        class Keyword {
        }
    })(BotRenderingMetadata || (BotRenderingMetadata = {}));
    /** Represents a BotSessionMetadata. */
    class BotSessionMetadata {
    }
    /** BotSessionSource enum. */
    let BotSessionSource;
    (function (BotSessionSource) {
        BotSessionSource[BotSessionSource["NONE"] = 0] = "NONE";
        BotSessionSource[BotSessionSource["NULL_STATE"] = 1] = "NULL_STATE";
        BotSessionSource[BotSessionSource["TYPEAHEAD"] = 2] = "TYPEAHEAD";
        BotSessionSource[BotSessionSource["USER_INPUT"] = 3] = "USER_INPUT";
        BotSessionSource[BotSessionSource["EMU_FLASH"] = 4] = "EMU_FLASH";
        BotSessionSource[BotSessionSource["EMU_FLASH_FOLLOWUP"] = 5] = "EMU_FLASH_FOLLOWUP";
        BotSessionSource[BotSessionSource["VOICE"] = 6] = "VOICE";
    })(BotSessionSource || (BotSessionSource = {}));
    /** Represents a BotSourcesMetadata. */
    class BotSourcesMetadata {
    }
    (function (BotSourcesMetadata) {
        /** Represents a BotSourceItem. */
        class BotSourceItem {
        }
        (function (BotSourceItem) {
            /** SourceProvider enum. */
            let SourceProvider;
            (function (SourceProvider) {
                SourceProvider[SourceProvider["UNKNOWN"] = 0] = "UNKNOWN";
                SourceProvider[SourceProvider["BING"] = 1] = "BING";
                SourceProvider[SourceProvider["GOOGLE"] = 2] = "GOOGLE";
                SourceProvider[SourceProvider["SUPPORT"] = 3] = "SUPPORT";
            })(SourceProvider || (SourceProvider = {}));
        })(BotSourceItem || (BotSourceItem = {}));
    })(BotSourcesMetadata || (BotSourcesMetadata = {}));
    /** Represents a BotSuggestedPromptMetadata. */
    class BotSuggestedPromptMetadata {
    }
    /** Represents a CallLogRecord. */
    class CallLogRecord {
    }
    (function (CallLogRecord) {
        /** CallResult enum. */
        let CallResult;
        (function (CallResult) {
            CallResult[CallResult["CONNECTED"] = 0] = "CONNECTED";
            CallResult[CallResult["REJECTED"] = 1] = "REJECTED";
            CallResult[CallResult["CANCELLED"] = 2] = "CANCELLED";
            CallResult[CallResult["ACCEPTEDELSEWHERE"] = 3] = "ACCEPTEDELSEWHERE";
            CallResult[CallResult["MISSED"] = 4] = "MISSED";
            CallResult[CallResult["INVALID"] = 5] = "INVALID";
            CallResult[CallResult["UNAVAILABLE"] = 6] = "UNAVAILABLE";
            CallResult[CallResult["UPCOMING"] = 7] = "UPCOMING";
            CallResult[CallResult["FAILED"] = 8] = "FAILED";
            CallResult[CallResult["ABANDONED"] = 9] = "ABANDONED";
            CallResult[CallResult["ONGOING"] = 10] = "ONGOING";
        })(CallResult || (CallResult = {}));
        /** CallType enum. */
        let CallType;
        (function (CallType) {
            CallType[CallType["REGULAR"] = 0] = "REGULAR";
            CallType[CallType["SCHEDULED_CALL"] = 1] = "SCHEDULED_CALL";
            CallType[CallType["VOICE_CHAT"] = 2] = "VOICE_CHAT";
        })(CallType || (CallType = {}));
        /** Represents a ParticipantInfo. */
        class ParticipantInfo {
        }
        /** SilenceReason enum. */
        let SilenceReason;
        (function (SilenceReason) {
            SilenceReason[SilenceReason["NONE"] = 0] = "NONE";
            SilenceReason[SilenceReason["SCHEDULED"] = 1] = "SCHEDULED";
            SilenceReason[SilenceReason["PRIVACY"] = 2] = "PRIVACY";
            SilenceReason[SilenceReason["LIGHTWEIGHT"] = 3] = "LIGHTWEIGHT";
        })(SilenceReason || (SilenceReason = {}));
    })(CallLogRecord || (CallLogRecord = {}));
    /** Represents a CertChain. */
    class CertChain {
    }
    (function (CertChain) {
        /** Represents a NoiseCertificate. */
        class NoiseCertificate {
        }
        (function (NoiseCertificate) {
            /** Represents a Details. */
            class Details {
            }
        })(NoiseCertificate || (NoiseCertificate = {}));
    })(CertChain || (CertChain = {}));
    /** Represents a ChatLockSettings. */
    class ChatLockSettings {
    }
    /** Represents a ChatRowOpaqueData. */
    class ChatRowOpaqueData {
    }
    (function (ChatRowOpaqueData) {
        /** Represents a DraftMessage. */
        class DraftMessage {
        }
        (function (DraftMessage) {
            /** Represents a CtwaContextData. */
            class CtwaContextData {
            }
            (function (CtwaContextData) {
                /** ContextInfoExternalAdReplyInfoMediaType enum. */
                let ContextInfoExternalAdReplyInfoMediaType;
                (function (ContextInfoExternalAdReplyInfoMediaType) {
                    ContextInfoExternalAdReplyInfoMediaType[ContextInfoExternalAdReplyInfoMediaType["NONE"] = 0] = "NONE";
                    ContextInfoExternalAdReplyInfoMediaType[ContextInfoExternalAdReplyInfoMediaType["IMAGE"] = 1] = "IMAGE";
                    ContextInfoExternalAdReplyInfoMediaType[ContextInfoExternalAdReplyInfoMediaType["VIDEO"] = 2] = "VIDEO";
                })(ContextInfoExternalAdReplyInfoMediaType || (ContextInfoExternalAdReplyInfoMediaType = {}));
            })(CtwaContextData || (CtwaContextData = {}));
            /** Represents a CtwaContextLinkData. */
            class CtwaContextLinkData {
            }
        })(DraftMessage || (DraftMessage = {}));
    })(ChatRowOpaqueData || (ChatRowOpaqueData = {}));
    /** Represents a Citation. */
    class Citation {
    }
    /** Represents a ClientPairingProps. */
    class ClientPairingProps {
    }
    /** Represents a ClientPayload. */
    class ClientPayload {
    }
    (function (ClientPayload) {
        /** AccountType enum. */
        let AccountType;
        (function (AccountType) {
            AccountType[AccountType["DEFAULT"] = 0] = "DEFAULT";
            AccountType[AccountType["GUEST"] = 1] = "GUEST";
        })(AccountType || (AccountType = {}));
        /** ConnectReason enum. */
        let ConnectReason;
        (function (ConnectReason) {
            ConnectReason[ConnectReason["PUSH"] = 0] = "PUSH";
            ConnectReason[ConnectReason["USER_ACTIVATED"] = 1] = "USER_ACTIVATED";
            ConnectReason[ConnectReason["SCHEDULED"] = 2] = "SCHEDULED";
            ConnectReason[ConnectReason["ERROR_RECONNECT"] = 3] = "ERROR_RECONNECT";
            ConnectReason[ConnectReason["NETWORK_SWITCH"] = 4] = "NETWORK_SWITCH";
            ConnectReason[ConnectReason["PING_RECONNECT"] = 5] = "PING_RECONNECT";
            ConnectReason[ConnectReason["UNKNOWN"] = 6] = "UNKNOWN";
        })(ConnectReason || (ConnectReason = {}));
        /** ConnectType enum. */
        let ConnectType;
        (function (ConnectType) {
            ConnectType[ConnectType["CELLULAR_UNKNOWN"] = 0] = "CELLULAR_UNKNOWN";
            ConnectType[ConnectType["WIFI_UNKNOWN"] = 1] = "WIFI_UNKNOWN";
            ConnectType[ConnectType["CELLULAR_EDGE"] = 100] = "CELLULAR_EDGE";
            ConnectType[ConnectType["CELLULAR_IDEN"] = 101] = "CELLULAR_IDEN";
            ConnectType[ConnectType["CELLULAR_UMTS"] = 102] = "CELLULAR_UMTS";
            ConnectType[ConnectType["CELLULAR_EVDO"] = 103] = "CELLULAR_EVDO";
            ConnectType[ConnectType["CELLULAR_GPRS"] = 104] = "CELLULAR_GPRS";
            ConnectType[ConnectType["CELLULAR_HSDPA"] = 105] = "CELLULAR_HSDPA";
            ConnectType[ConnectType["CELLULAR_HSUPA"] = 106] = "CELLULAR_HSUPA";
            ConnectType[ConnectType["CELLULAR_HSPA"] = 107] = "CELLULAR_HSPA";
            ConnectType[ConnectType["CELLULAR_CDMA"] = 108] = "CELLULAR_CDMA";
            ConnectType[ConnectType["CELLULAR_1XRTT"] = 109] = "CELLULAR_1XRTT";
            ConnectType[ConnectType["CELLULAR_EHRPD"] = 110] = "CELLULAR_EHRPD";
            ConnectType[ConnectType["CELLULAR_LTE"] = 111] = "CELLULAR_LTE";
            ConnectType[ConnectType["CELLULAR_HSPAP"] = 112] = "CELLULAR_HSPAP";
        })(ConnectType || (ConnectType = {}));
        /** Represents a DNSSource. */
        class DNSSource {
        }
        (function (DNSSource) {
            /** DNSResolutionMethod enum. */
            let DNSResolutionMethod;
            (function (DNSResolutionMethod) {
                DNSResolutionMethod[DNSResolutionMethod["SYSTEM"] = 0] = "SYSTEM";
                DNSResolutionMethod[DNSResolutionMethod["GOOGLE"] = 1] = "GOOGLE";
                DNSResolutionMethod[DNSResolutionMethod["HARDCODED"] = 2] = "HARDCODED";
                DNSResolutionMethod[DNSResolutionMethod["OVERRIDE"] = 3] = "OVERRIDE";
                DNSResolutionMethod[DNSResolutionMethod["FALLBACK"] = 4] = "FALLBACK";
                DNSResolutionMethod[DNSResolutionMethod["MNS"] = 5] = "MNS";
            })(DNSResolutionMethod || (DNSResolutionMethod = {}));
        })(DNSSource || (DNSSource = {}));
        /** Represents a DevicePairingRegistrationData. */
        class DevicePairingRegistrationData {
        }
        /** IOSAppExtension enum. */
        let IOSAppExtension;
        (function (IOSAppExtension) {
            IOSAppExtension[IOSAppExtension["SHARE_EXTENSION"] = 0] = "SHARE_EXTENSION";
            IOSAppExtension[IOSAppExtension["SERVICE_EXTENSION"] = 1] = "SERVICE_EXTENSION";
            IOSAppExtension[IOSAppExtension["INTENTS_EXTENSION"] = 2] = "INTENTS_EXTENSION";
        })(IOSAppExtension || (IOSAppExtension = {}));
        /** Represents an InteropData. */
        class InteropData {
        }
        /** Product enum. */
        let Product;
        (function (Product) {
            Product[Product["WHATSAPP"] = 0] = "WHATSAPP";
            Product[Product["MESSENGER"] = 1] = "MESSENGER";
            Product[Product["INTEROP"] = 2] = "INTEROP";
            Product[Product["INTEROP_MSGR"] = 3] = "INTEROP_MSGR";
            Product[Product["WHATSAPP_LID"] = 4] = "WHATSAPP_LID";
        })(Product || (Product = {}));
        /** TrafficAnonymization enum. */
        let TrafficAnonymization;
        (function (TrafficAnonymization) {
            TrafficAnonymization[TrafficAnonymization["OFF"] = 0] = "OFF";
            TrafficAnonymization[TrafficAnonymization["STANDARD"] = 1] = "STANDARD";
        })(TrafficAnonymization || (TrafficAnonymization = {}));
        /** Represents a UserAgent. */
        class UserAgent {
        }
        (function (UserAgent) {
            /** Represents an AppVersion. */
            class AppVersion {
            }
            /** DeviceType enum. */
            let DeviceType;
            (function (DeviceType) {
                DeviceType[DeviceType["PHONE"] = 0] = "PHONE";
                DeviceType[DeviceType["TABLET"] = 1] = "TABLET";
                DeviceType[DeviceType["DESKTOP"] = 2] = "DESKTOP";
                DeviceType[DeviceType["WEARABLE"] = 3] = "WEARABLE";
                DeviceType[DeviceType["VR"] = 4] = "VR";
            })(DeviceType || (DeviceType = {}));
            /** Platform enum. */
            let Platform;
            (function (Platform) {
                Platform[Platform["ANDROID"] = 0] = "ANDROID";
                Platform[Platform["IOS"] = 1] = "IOS";
                Platform[Platform["WINDOWS_PHONE"] = 2] = "WINDOWS_PHONE";
                Platform[Platform["BLACKBERRY"] = 3] = "BLACKBERRY";
                Platform[Platform["BLACKBERRYX"] = 4] = "BLACKBERRYX";
                Platform[Platform["S40"] = 5] = "S40";
                Platform[Platform["S60"] = 6] = "S60";
                Platform[Platform["PYTHON_CLIENT"] = 7] = "PYTHON_CLIENT";
                Platform[Platform["TIZEN"] = 8] = "TIZEN";
                Platform[Platform["ENTERPRISE"] = 9] = "ENTERPRISE";
                Platform[Platform["SMB_ANDROID"] = 10] = "SMB_ANDROID";
                Platform[Platform["KAIOS"] = 11] = "KAIOS";
                Platform[Platform["SMB_IOS"] = 12] = "SMB_IOS";
                Platform[Platform["WINDOWS"] = 13] = "WINDOWS";
                Platform[Platform["WEB"] = 14] = "WEB";
                Platform[Platform["PORTAL"] = 15] = "PORTAL";
                Platform[Platform["GREEN_ANDROID"] = 16] = "GREEN_ANDROID";
                Platform[Platform["GREEN_IPHONE"] = 17] = "GREEN_IPHONE";
                Platform[Platform["BLUE_ANDROID"] = 18] = "BLUE_ANDROID";
                Platform[Platform["BLUE_IPHONE"] = 19] = "BLUE_IPHONE";
                Platform[Platform["FBLITE_ANDROID"] = 20] = "FBLITE_ANDROID";
                Platform[Platform["MLITE_ANDROID"] = 21] = "MLITE_ANDROID";
                Platform[Platform["IGLITE_ANDROID"] = 22] = "IGLITE_ANDROID";
                Platform[Platform["PAGE"] = 23] = "PAGE";
                Platform[Platform["MACOS"] = 24] = "MACOS";
                Platform[Platform["OCULUS_MSG"] = 25] = "OCULUS_MSG";
                Platform[Platform["OCULUS_CALL"] = 26] = "OCULUS_CALL";
                Platform[Platform["MILAN"] = 27] = "MILAN";
                Platform[Platform["CAPI"] = 28] = "CAPI";
                Platform[Platform["WEAROS"] = 29] = "WEAROS";
                Platform[Platform["ARDEVICE"] = 30] = "ARDEVICE";
                Platform[Platform["VRDEVICE"] = 31] = "VRDEVICE";
                Platform[Platform["BLUE_WEB"] = 32] = "BLUE_WEB";
                Platform[Platform["IPAD"] = 33] = "IPAD";
                Platform[Platform["TEST"] = 34] = "TEST";
                Platform[Platform["SMART_GLASSES"] = 35] = "SMART_GLASSES";
            })(Platform || (Platform = {}));
            /** ReleaseChannel enum. */
            let ReleaseChannel;
            (function (ReleaseChannel) {
                ReleaseChannel[ReleaseChannel["RELEASE"] = 0] = "RELEASE";
                ReleaseChannel[ReleaseChannel["BETA"] = 1] = "BETA";
                ReleaseChannel[ReleaseChannel["ALPHA"] = 2] = "ALPHA";
                ReleaseChannel[ReleaseChannel["DEBUG"] = 3] = "DEBUG";
            })(ReleaseChannel || (ReleaseChannel = {}));
        })(UserAgent || (UserAgent = {}));
        /** Represents a WebInfo. */
        class WebInfo {
        }
        (function (WebInfo) {
            /** WebSubPlatform enum. */
            let WebSubPlatform;
            (function (WebSubPlatform) {
                WebSubPlatform[WebSubPlatform["WEB_BROWSER"] = 0] = "WEB_BROWSER";
                WebSubPlatform[WebSubPlatform["APP_STORE"] = 1] = "APP_STORE";
                WebSubPlatform[WebSubPlatform["WIN_STORE"] = 2] = "WIN_STORE";
                WebSubPlatform[WebSubPlatform["DARWIN"] = 3] = "DARWIN";
                WebSubPlatform[WebSubPlatform["WIN32"] = 4] = "WIN32";
                WebSubPlatform[WebSubPlatform["WIN_HYBRID"] = 5] = "WIN_HYBRID";
            })(WebSubPlatform || (WebSubPlatform = {}));
            /** Represents a WebdPayload. */
            class WebdPayload {
            }
        })(WebInfo || (WebInfo = {}));
    })(ClientPayload || (ClientPayload = {}));
    /** Represents a CommentMetadata. */
    class CommentMetadata {
    }
    /** Represents a CompanionCommitment. */
    class CompanionCommitment {
    }
    /** Represents a CompanionEphemeralIdentity. */
    class CompanionEphemeralIdentity {
    }
    /** Represents a Config. */
    class Config {
    }
    /** Represents a ContextInfo. */
    class ContextInfo {
    }
    (function (ContextInfo) {
        /** Represents an AdReplyInfo. */
        class AdReplyInfo {
        }
        (function (AdReplyInfo) {
            /** MediaType enum. */
            let MediaType;
            (function (MediaType) {
                MediaType[MediaType["NONE"] = 0] = "NONE";
                MediaType[MediaType["IMAGE"] = 1] = "IMAGE";
                MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
            })(MediaType || (MediaType = {}));
        })(AdReplyInfo || (AdReplyInfo = {}));
        /** Represents a BusinessMessageForwardInfo. */
        class BusinessMessageForwardInfo {
        }
        /** Represents a DataSharingContext. */
        class DataSharingContext {
        }
        (function (DataSharingContext) {
            /** Represents a Parameters. */
            class Parameters {
            }
        })(DataSharingContext || (DataSharingContext = {}));
        /** Represents an ExternalAdReplyInfo. */
        class ExternalAdReplyInfo {
        }
        (function (ExternalAdReplyInfo) {
            /** AdType enum. */
            let AdType;
            (function (AdType) {
                AdType[AdType["CTWA"] = 0] = "CTWA";
                AdType[AdType["CAWC"] = 1] = "CAWC";
            })(AdType || (AdType = {}));
            /** MediaType enum. */
            let MediaType;
            (function (MediaType) {
                MediaType[MediaType["NONE"] = 0] = "NONE";
                MediaType[MediaType["IMAGE"] = 1] = "IMAGE";
                MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
            })(MediaType || (MediaType = {}));
        })(ExternalAdReplyInfo || (ExternalAdReplyInfo = {}));
        /** Represents a FeatureEligibilities. */
        class FeatureEligibilities {
        }
        /** Represents a ForwardedAIBotMessageInfo. */
        class ForwardedAIBotMessageInfo {
        }
        /** Represents a ForwardedNewsletterMessageInfo. */
        class ForwardedNewsletterMessageInfo {
        }
        (function (ForwardedNewsletterMessageInfo) {
            /** ContentType enum. */
            let ContentType;
            (function (ContentType) {
                ContentType[ContentType["UPDATE"] = 1] = "UPDATE";
                ContentType[ContentType["UPDATE_CARD"] = 2] = "UPDATE_CARD";
                ContentType[ContentType["LINK_CARD"] = 3] = "LINK_CARD";
            })(ContentType || (ContentType = {}));
        })(ForwardedNewsletterMessageInfo || (ForwardedNewsletterMessageInfo = {}));
        /** PairedMediaType enum. */
        let PairedMediaType;
        (function (PairedMediaType) {
            PairedMediaType[PairedMediaType["NOT_PAIRED_MEDIA"] = 0] = "NOT_PAIRED_MEDIA";
            PairedMediaType[PairedMediaType["SD_VIDEO_PARENT"] = 1] = "SD_VIDEO_PARENT";
            PairedMediaType[PairedMediaType["HD_VIDEO_CHILD"] = 2] = "HD_VIDEO_CHILD";
            PairedMediaType[PairedMediaType["SD_IMAGE_PARENT"] = 3] = "SD_IMAGE_PARENT";
            PairedMediaType[PairedMediaType["HD_IMAGE_CHILD"] = 4] = "HD_IMAGE_CHILD";
            PairedMediaType[PairedMediaType["MOTION_PHOTO_PARENT"] = 5] = "MOTION_PHOTO_PARENT";
            PairedMediaType[PairedMediaType["MOTION_PHOTO_CHILD"] = 6] = "MOTION_PHOTO_CHILD";
        })(PairedMediaType || (PairedMediaType = {}));
        /** StatusAttributionType enum. */
        let StatusAttributionType;
        (function (StatusAttributionType) {
            StatusAttributionType[StatusAttributionType["NONE"] = 0] = "NONE";
            StatusAttributionType[StatusAttributionType["RESHARED_FROM_MENTION"] = 1] = "RESHARED_FROM_MENTION";
            StatusAttributionType[StatusAttributionType["RESHARED_FROM_POST"] = 2] = "RESHARED_FROM_POST";
        })(StatusAttributionType || (StatusAttributionType = {}));
        /** StatusSourceType enum. */
        let StatusSourceType;
        (function (StatusSourceType) {
            StatusSourceType[StatusSourceType["IMAGE"] = 0] = "IMAGE";
            StatusSourceType[StatusSourceType["VIDEO"] = 1] = "VIDEO";
            StatusSourceType[StatusSourceType["GIF"] = 2] = "GIF";
            StatusSourceType[StatusSourceType["AUDIO"] = 3] = "AUDIO";
            StatusSourceType[StatusSourceType["TEXT"] = 4] = "TEXT";
            StatusSourceType[StatusSourceType["MUSIC_STANDALONE"] = 5] = "MUSIC_STANDALONE";
        })(StatusSourceType || (StatusSourceType = {}));
        /** Represents a UTMInfo. */
        class UTMInfo {
        }
    })(ContextInfo || (ContextInfo = {}));
    /** Represents a Conversation. */
    class Conversation {
    }
    (function (Conversation) {
        /** EndOfHistoryTransferType enum. */
        let EndOfHistoryTransferType;
        (function (EndOfHistoryTransferType) {
            EndOfHistoryTransferType[EndOfHistoryTransferType["COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY"] = 0] = "COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY";
            EndOfHistoryTransferType[EndOfHistoryTransferType["COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY"] = 1] = "COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY";
            EndOfHistoryTransferType[EndOfHistoryTransferType["COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY"] = 2] = "COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY";
        })(EndOfHistoryTransferType || (EndOfHistoryTransferType = {}));
    })(Conversation || (Conversation = {}));
    /** Represents a DeviceCapabilities. */
    class DeviceCapabilities {
    }
    (function (DeviceCapabilities) {
        /** ChatLockSupportLevel enum. */
        let ChatLockSupportLevel;
        (function (ChatLockSupportLevel) {
            ChatLockSupportLevel[ChatLockSupportLevel["NONE"] = 0] = "NONE";
            ChatLockSupportLevel[ChatLockSupportLevel["MINIMAL"] = 1] = "MINIMAL";
            ChatLockSupportLevel[ChatLockSupportLevel["FULL"] = 2] = "FULL";
        })(ChatLockSupportLevel || (ChatLockSupportLevel = {}));
        /** Represents a LIDMigration. */
        class LIDMigration {
        }
    })(DeviceCapabilities || (DeviceCapabilities = {}));
    /** Represents a DeviceConsistencyCodeMessage. */
    class DeviceConsistencyCodeMessage {
    }
    /** Represents a DeviceListMetadata. */
    class DeviceListMetadata {
    }
    /** Represents a DeviceProps. */
    class DeviceProps {
    }
    (function (DeviceProps) {
        /** Represents an AppVersion. */
        class AppVersion {
        }
        /** Represents a HistorySyncConfig. */
        class HistorySyncConfig {
        }
        /** PlatformType enum. */
        let PlatformType;
        (function (PlatformType) {
            PlatformType[PlatformType["UNKNOWN"] = 0] = "UNKNOWN";
            PlatformType[PlatformType["CHROME"] = 1] = "CHROME";
            PlatformType[PlatformType["FIREFOX"] = 2] = "FIREFOX";
            PlatformType[PlatformType["IE"] = 3] = "IE";
            PlatformType[PlatformType["OPERA"] = 4] = "OPERA";
            PlatformType[PlatformType["SAFARI"] = 5] = "SAFARI";
            PlatformType[PlatformType["EDGE"] = 6] = "EDGE";
            PlatformType[PlatformType["DESKTOP"] = 7] = "DESKTOP";
            PlatformType[PlatformType["IPAD"] = 8] = "IPAD";
            PlatformType[PlatformType["ANDROID_TABLET"] = 9] = "ANDROID_TABLET";
            PlatformType[PlatformType["OHANA"] = 10] = "OHANA";
            PlatformType[PlatformType["ALOHA"] = 11] = "ALOHA";
            PlatformType[PlatformType["CATALINA"] = 12] = "CATALINA";
            PlatformType[PlatformType["TCL_TV"] = 13] = "TCL_TV";
            PlatformType[PlatformType["IOS_PHONE"] = 14] = "IOS_PHONE";
            PlatformType[PlatformType["IOS_CATALYST"] = 15] = "IOS_CATALYST";
            PlatformType[PlatformType["ANDROID_PHONE"] = 16] = "ANDROID_PHONE";
            PlatformType[PlatformType["ANDROID_AMBIGUOUS"] = 17] = "ANDROID_AMBIGUOUS";
            PlatformType[PlatformType["WEAR_OS"] = 18] = "WEAR_OS";
            PlatformType[PlatformType["AR_WRIST"] = 19] = "AR_WRIST";
            PlatformType[PlatformType["AR_DEVICE"] = 20] = "AR_DEVICE";
            PlatformType[PlatformType["UWP"] = 21] = "UWP";
            PlatformType[PlatformType["VR"] = 22] = "VR";
            PlatformType[PlatformType["CLOUD_API"] = 23] = "CLOUD_API";
            PlatformType[PlatformType["SMARTGLASSES"] = 24] = "SMARTGLASSES";
        })(PlatformType || (PlatformType = {}));
    })(DeviceProps || (DeviceProps = {}));
    /** Represents a DisappearingMode. */
    class DisappearingMode {
    }
    (function (DisappearingMode) {
        /** Initiator enum. */
        let Initiator;
        (function (Initiator) {
            Initiator[Initiator["CHANGED_IN_CHAT"] = 0] = "CHANGED_IN_CHAT";
            Initiator[Initiator["INITIATED_BY_ME"] = 1] = "INITIATED_BY_ME";
            Initiator[Initiator["INITIATED_BY_OTHER"] = 2] = "INITIATED_BY_OTHER";
            Initiator[Initiator["BIZ_UPGRADE_FB_HOSTING"] = 3] = "BIZ_UPGRADE_FB_HOSTING";
        })(Initiator || (Initiator = {}));
        /** Trigger enum. */
        let Trigger;
        (function (Trigger) {
            Trigger[Trigger["UNKNOWN"] = 0] = "UNKNOWN";
            Trigger[Trigger["CHAT_SETTING"] = 1] = "CHAT_SETTING";
            Trigger[Trigger["ACCOUNT_SETTING"] = 2] = "ACCOUNT_SETTING";
            Trigger[Trigger["BULK_CHANGE"] = 3] = "BULK_CHANGE";
            Trigger[Trigger["BIZ_SUPPORTS_FB_HOSTING"] = 4] = "BIZ_SUPPORTS_FB_HOSTING";
            Trigger[Trigger["UNKNOWN_GROUPS"] = 5] = "UNKNOWN_GROUPS";
        })(Trigger || (Trigger = {}));
    })(DisappearingMode || (DisappearingMode = {}));
    /** Represents an EmbeddedContent. */
    class EmbeddedContent {
    }
    /** Represents an EmbeddedMessage. */
    class EmbeddedMessage {
    }
    /** Represents an EmbeddedMusic. */
    class EmbeddedMusic {
    }
    /** Represents an EncryptedPairingRequest. */
    class EncryptedPairingRequest {
    }
    /** Represents an EphemeralSetting. */
    class EphemeralSetting {
    }
    /** Represents an EventAdditionalMetadata. */
    class EventAdditionalMetadata {
    }
    /** Represents an EventResponse. */
    class EventResponse {
    }
    /** Represents an ExitCode. */
    class ExitCode {
    }
    /** Represents an ExternalBlobReference. */
    class ExternalBlobReference {
    }
    /** Represents a Field. */
    class Field {
    }
    /** Represents a GlobalSettings. */
    class GlobalSettings {
    }
    /** Represents a GroupMention. */
    class GroupMention {
    }
    /** Represents a GroupParticipant. */
    class GroupParticipant {
    }
    (function (GroupParticipant) {
        /** Rank enum. */
        let Rank;
        (function (Rank) {
            Rank[Rank["REGULAR"] = 0] = "REGULAR";
            Rank[Rank["ADMIN"] = 1] = "ADMIN";
            Rank[Rank["SUPERADMIN"] = 2] = "SUPERADMIN";
        })(Rank || (Rank = {}));
    })(GroupParticipant || (GroupParticipant = {}));
    /** Represents a HandshakeMessage. */
    class HandshakeMessage {
    }
    (function (HandshakeMessage) {
        /** Represents a ClientFinish. */
        class ClientFinish {
        }
        /** Represents a ClientHello. */
        class ClientHello {
        }
        /** Represents a ServerHello. */
        class ServerHello {
        }
    })(HandshakeMessage || (HandshakeMessage = {}));
    /** Represents a HistorySync. */
    class HistorySync {
    }
    (function (HistorySync) {
        /** BotAIWaitListState enum. */
        let BotAIWaitListState;
        (function (BotAIWaitListState) {
            BotAIWaitListState[BotAIWaitListState["IN_WAITLIST"] = 0] = "IN_WAITLIST";
            BotAIWaitListState[BotAIWaitListState["AI_AVAILABLE"] = 1] = "AI_AVAILABLE";
        })(BotAIWaitListState || (BotAIWaitListState = {}));
        /** HistorySyncType enum. */
        let HistorySyncType;
        (function (HistorySyncType) {
            HistorySyncType[HistorySyncType["INITIAL_BOOTSTRAP"] = 0] = "INITIAL_BOOTSTRAP";
            HistorySyncType[HistorySyncType["INITIAL_STATUS_V3"] = 1] = "INITIAL_STATUS_V3";
            HistorySyncType[HistorySyncType["FULL"] = 2] = "FULL";
            HistorySyncType[HistorySyncType["RECENT"] = 3] = "RECENT";
            HistorySyncType[HistorySyncType["PUSH_NAME"] = 4] = "PUSH_NAME";
            HistorySyncType[HistorySyncType["NON_BLOCKING_DATA"] = 5] = "NON_BLOCKING_DATA";
            HistorySyncType[HistorySyncType["ON_DEMAND"] = 6] = "ON_DEMAND";
        })(HistorySyncType || (HistorySyncType = {}));
    })(HistorySync || (HistorySync = {}));
    /** Represents a HistorySyncMsg. */
    class HistorySyncMsg {
    }
    /** Represents a HydratedTemplateButton. */
    class HydratedTemplateButton {
    }
    (function (HydratedTemplateButton) {
        /** Represents a HydratedCallButton. */
        class HydratedCallButton {
        }
        /** Represents a HydratedQuickReplyButton. */
        class HydratedQuickReplyButton {
        }
        /** Represents a HydratedURLButton. */
        class HydratedURLButton {
        }
        (function (HydratedURLButton) {
            /** WebviewPresentationType enum. */
            let WebviewPresentationType;
            (function (WebviewPresentationType) {
                WebviewPresentationType[WebviewPresentationType["FULL"] = 1] = "FULL";
                WebviewPresentationType[WebviewPresentationType["TALL"] = 2] = "TALL";
                WebviewPresentationType[WebviewPresentationType["COMPACT"] = 3] = "COMPACT";
            })(WebviewPresentationType || (WebviewPresentationType = {}));
        })(HydratedURLButton || (HydratedURLButton = {}));
    })(HydratedTemplateButton || (HydratedTemplateButton = {}));
    /** Represents an IdentityKeyPairStructure. */
    class IdentityKeyPairStructure {
    }
    /** Represents an InteractiveAnnotation. */
    class InteractiveAnnotation {
    }
    (function (InteractiveAnnotation) {
        /** StatusLinkType enum. */
        let StatusLinkType;
        (function (StatusLinkType) {
            StatusLinkType[StatusLinkType["RASTERIZED_LINK_PREVIEW"] = 1] = "RASTERIZED_LINK_PREVIEW";
            StatusLinkType[StatusLinkType["RASTERIZED_LINK_TRUNCATED"] = 2] = "RASTERIZED_LINK_TRUNCATED";
            StatusLinkType[StatusLinkType["RASTERIZED_LINK_FULL_URL"] = 3] = "RASTERIZED_LINK_FULL_URL";
        })(StatusLinkType || (StatusLinkType = {}));
    })(InteractiveAnnotation || (InteractiveAnnotation = {}));
    /** Represents a KeepInChat. */
    class KeepInChat {
    }
    /** KeepType enum. */
    let KeepType;
    (function (KeepType) {
        KeepType[KeepType["UNKNOWN"] = 0] = "UNKNOWN";
        KeepType[KeepType["KEEP_FOR_ALL"] = 1] = "KEEP_FOR_ALL";
        KeepType[KeepType["UNDO_KEEP_FOR_ALL"] = 2] = "UNDO_KEEP_FOR_ALL";
    })(KeepType || (KeepType = {}));
    /** Represents a KeyExchangeMessage. */
    class KeyExchangeMessage {
    }
    /** Represents a KeyId. */
    class KeyId {
    }
    /** Represents a LIDMigrationMapping. */
    class LIDMigrationMapping {
    }
    /** Represents a LIDMigrationMappingSyncMessage. */
    class LIDMigrationMappingSyncMessage {
    }
    /** Represents a LIDMigrationMappingSyncPayload. */
    class LIDMigrationMappingSyncPayload {
    }
    /** Represents a LegacyMessage. */
    class LegacyMessage {
    }
    /** Represents a LimitSharing. */
    class LimitSharing {
    }
    (function (LimitSharing) {
        /** TriggerType enum. */
        let TriggerType;
        (function (TriggerType) {
            TriggerType[TriggerType["UNKNOWN"] = 0] = "UNKNOWN";
            TriggerType[TriggerType["CHAT_SETTING"] = 1] = "CHAT_SETTING";
            TriggerType[TriggerType["BIZ_SUPPORTS_FB_HOSTING"] = 2] = "BIZ_SUPPORTS_FB_HOSTING";
            TriggerType[TriggerType["UNKNOWN_GROUP"] = 3] = "UNKNOWN_GROUP";
        })(TriggerType || (TriggerType = {}));
    })(LimitSharing || (LimitSharing = {}));
    /** Represents a LocalizedName. */
    class LocalizedName {
    }
    /** Represents a Location. */
    class Location {
    }
    /** Represents a MediaData. */
    class MediaData {
    }
    /** Represents a MediaNotifyMessage. */
    class MediaNotifyMessage {
    }
    /** Represents a MediaRetryNotification. */
    class MediaRetryNotification {
    }
    (function (MediaRetryNotification) {
        /** ResultType enum. */
        let ResultType;
        (function (ResultType) {
            ResultType[ResultType["GENERAL_ERROR"] = 0] = "GENERAL_ERROR";
            ResultType[ResultType["SUCCESS"] = 1] = "SUCCESS";
            ResultType[ResultType["NOT_FOUND"] = 2] = "NOT_FOUND";
            ResultType[ResultType["DECRYPTION_ERROR"] = 3] = "DECRYPTION_ERROR";
        })(ResultType || (ResultType = {}));
    })(MediaRetryNotification || (MediaRetryNotification = {}));
    /** MediaVisibility enum. */
    let MediaVisibility;
    (function (MediaVisibility) {
        MediaVisibility[MediaVisibility["DEFAULT"] = 0] = "DEFAULT";
        MediaVisibility[MediaVisibility["OFF"] = 1] = "OFF";
        MediaVisibility[MediaVisibility["ON"] = 2] = "ON";
    })(MediaVisibility || (MediaVisibility = {}));
    /** Represents a MemberLabel. */
    class MemberLabel {
    }
    /** Represents a Message. */
    class Message {
    }
    (function (Message) {
        /** Represents an AlbumMessage. */
        class AlbumMessage {
        }
        /** Represents an AppStateFatalExceptionNotification. */
        class AppStateFatalExceptionNotification {
        }
        /** Represents an AppStateSyncKey. */
        class AppStateSyncKey {
        }
        /** Represents an AppStateSyncKeyData. */
        class AppStateSyncKeyData {
        }
        /** Represents an AppStateSyncKeyFingerprint. */
        class AppStateSyncKeyFingerprint {
        }
        /** Represents an AppStateSyncKeyId. */
        class AppStateSyncKeyId {
        }
        /** Represents an AppStateSyncKeyRequest. */
        class AppStateSyncKeyRequest {
        }
        /** Represents an AppStateSyncKeyShare. */
        class AppStateSyncKeyShare {
        }
        /** Represents an AudioMessage. */
        class AudioMessage {
        }
        /** Represents a BCallMessage. */
        class BCallMessage {
        }
        (function (BCallMessage) {
            /** MediaType enum. */
            let MediaType;
            (function (MediaType) {
                MediaType[MediaType["UNKNOWN"] = 0] = "UNKNOWN";
                MediaType[MediaType["AUDIO"] = 1] = "AUDIO";
                MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
            })(MediaType || (MediaType = {}));
        })(BCallMessage || (BCallMessage = {}));
        /** Represents a BotFeedbackMessage. */
        class BotFeedbackMessage {
        }
        (function (BotFeedbackMessage) {
            /** BotFeedbackKind enum. */
            let BotFeedbackKind;
            (function (BotFeedbackKind) {
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_POSITIVE"] = 0] = "BOT_FEEDBACK_POSITIVE";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_GENERIC"] = 1] = "BOT_FEEDBACK_NEGATIVE_GENERIC";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_HELPFUL"] = 2] = "BOT_FEEDBACK_NEGATIVE_HELPFUL";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_INTERESTING"] = 3] = "BOT_FEEDBACK_NEGATIVE_INTERESTING";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_ACCURATE"] = 4] = "BOT_FEEDBACK_NEGATIVE_ACCURATE";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_SAFE"] = 5] = "BOT_FEEDBACK_NEGATIVE_SAFE";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_OTHER"] = 6] = "BOT_FEEDBACK_NEGATIVE_OTHER";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_REFUSED"] = 7] = "BOT_FEEDBACK_NEGATIVE_REFUSED";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING"] = 8] = "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 9] = "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_PERSONALIZED"] = 10] = "BOT_FEEDBACK_NEGATIVE_PERSONALIZED";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_CLARITY"] = 11] = "BOT_FEEDBACK_NEGATIVE_CLARITY";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON"] = 12] = "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON";
            })(BotFeedbackKind || (BotFeedbackKind = {}));
            /** BotFeedbackKindMultipleNegative enum. */
            let BotFeedbackKindMultipleNegative;
            (function (BotFeedbackKindMultipleNegative) {
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC"] = 1] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL"] = 2] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING"] = 4] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE"] = 8] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE"] = 16] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER"] = 32] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED"] = 64] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING"] = 128] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 256] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT";
            })(BotFeedbackKindMultipleNegative || (BotFeedbackKindMultipleNegative = {}));
            /** BotFeedbackKindMultiplePositive enum. */
            let BotFeedbackKindMultiplePositive;
            (function (BotFeedbackKindMultiplePositive) {
                BotFeedbackKindMultiplePositive[BotFeedbackKindMultiplePositive["BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC"] = 1] = "BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC";
            })(BotFeedbackKindMultiplePositive || (BotFeedbackKindMultiplePositive = {}));
            /** ReportKind enum. */
            let ReportKind;
            (function (ReportKind) {
                ReportKind[ReportKind["GENERIC"] = 0] = "GENERIC";
            })(ReportKind || (ReportKind = {}));
        })(BotFeedbackMessage || (BotFeedbackMessage = {}));
        /** Represents a ButtonsMessage. */
        class ButtonsMessage {
        }
        (function (ButtonsMessage) {
            /** Represents a Button. */
            class Button {
            }
            (function (Button) {
                /** Represents a ButtonText. */
                class ButtonText {
                }
                /** Represents a NativeFlowInfo. */
                class NativeFlowInfo {
                }
                /** Type enum. */
                let Type;
                (function (Type) {
                    Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
                    Type[Type["RESPONSE"] = 1] = "RESPONSE";
                    Type[Type["NATIVE_FLOW"] = 2] = "NATIVE_FLOW";
                })(Type || (Type = {}));
            })(Button || (Button = {}));
            /** HeaderType enum. */
            let HeaderType;
            (function (HeaderType) {
                HeaderType[HeaderType["UNKNOWN"] = 0] = "UNKNOWN";
                HeaderType[HeaderType["EMPTY"] = 1] = "EMPTY";
                HeaderType[HeaderType["TEXT"] = 2] = "TEXT";
                HeaderType[HeaderType["DOCUMENT"] = 3] = "DOCUMENT";
                HeaderType[HeaderType["IMAGE"] = 4] = "IMAGE";
                HeaderType[HeaderType["VIDEO"] = 5] = "VIDEO";
                HeaderType[HeaderType["LOCATION"] = 6] = "LOCATION";
            })(HeaderType || (HeaderType = {}));
        })(ButtonsMessage || (ButtonsMessage = {}));
        /** Represents a ButtonsResponseMessage. */
        class ButtonsResponseMessage {
        }
        (function (ButtonsResponseMessage) {
            /** Type enum. */
            let Type;
            (function (Type) {
                Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
                Type[Type["DISPLAY_TEXT"] = 1] = "DISPLAY_TEXT";
            })(Type || (Type = {}));
        })(ButtonsResponseMessage || (ButtonsResponseMessage = {}));
        /** Represents a Call. */
        class Call {
        }
        /** Represents a CallLogMessage. */
        class CallLogMessage {
        }
        (function (CallLogMessage) {
            /** CallOutcome enum. */
            let CallOutcome;
            (function (CallOutcome) {
                CallOutcome[CallOutcome["CONNECTED"] = 0] = "CONNECTED";
                CallOutcome[CallOutcome["MISSED"] = 1] = "MISSED";
                CallOutcome[CallOutcome["FAILED"] = 2] = "FAILED";
                CallOutcome[CallOutcome["REJECTED"] = 3] = "REJECTED";
                CallOutcome[CallOutcome["ACCEPTED_ELSEWHERE"] = 4] = "ACCEPTED_ELSEWHERE";
                CallOutcome[CallOutcome["ONGOING"] = 5] = "ONGOING";
                CallOutcome[CallOutcome["SILENCED_BY_DND"] = 6] = "SILENCED_BY_DND";
                CallOutcome[CallOutcome["SILENCED_UNKNOWN_CALLER"] = 7] = "SILENCED_UNKNOWN_CALLER";
            })(CallOutcome || (CallOutcome = {}));
            /** Represents a CallParticipant. */
            class CallParticipant {
            }
            /** CallType enum. */
            let CallType;
            (function (CallType) {
                CallType[CallType["REGULAR"] = 0] = "REGULAR";
                CallType[CallType["SCHEDULED_CALL"] = 1] = "SCHEDULED_CALL";
                CallType[CallType["VOICE_CHAT"] = 2] = "VOICE_CHAT";
            })(CallType || (CallType = {}));
        })(CallLogMessage || (CallLogMessage = {}));
        /** Represents a CancelPaymentRequestMessage. */
        class CancelPaymentRequestMessage {
        }
        /** Represents a Chat. */
        class Chat {
        }
        /** Represents a CloudAPIThreadControlNotification. */
        class CloudAPIThreadControlNotification {
        }
        (function (CloudAPIThreadControlNotification) {
            /** CloudAPIThreadControl enum. */
            let CloudAPIThreadControl;
            (function (CloudAPIThreadControl) {
                CloudAPIThreadControl[CloudAPIThreadControl["UNKNOWN"] = 0] = "UNKNOWN";
                CloudAPIThreadControl[CloudAPIThreadControl["CONTROL_PASSED"] = 1] = "CONTROL_PASSED";
                CloudAPIThreadControl[CloudAPIThreadControl["CONTROL_TAKEN"] = 2] = "CONTROL_TAKEN";
            })(CloudAPIThreadControl || (CloudAPIThreadControl = {}));
            /** Represents a CloudAPIThreadControlNotificationContent. */
            class CloudAPIThreadControlNotificationContent {
            }
        })(CloudAPIThreadControlNotification || (CloudAPIThreadControlNotification = {}));
        /** Represents a CommentMessage. */
        class CommentMessage {
        }
        /** Represents a ContactMessage. */
        class ContactMessage {
        }
        /** Represents a ContactsArrayMessage. */
        class ContactsArrayMessage {
        }
        /** Represents a DeclinePaymentRequestMessage. */
        class DeclinePaymentRequestMessage {
        }
        /** Represents a DeviceSentMessage. */
        class DeviceSentMessage {
        }
        /** Represents a DocumentMessage. */
        class DocumentMessage {
        }
        /** Represents an EncCommentMessage. */
        class EncCommentMessage {
        }
        /** Represents an EncEventResponseMessage. */
        class EncEventResponseMessage {
        }
        /** Represents an EncReactionMessage. */
        class EncReactionMessage {
        }
        /** Represents an EventMessage. */
        class EventMessage {
        }
        /** Represents an EventResponseMessage. */
        class EventResponseMessage {
        }
        (function (EventResponseMessage) {
            /** EventResponseType enum. */
            let EventResponseType;
            (function (EventResponseType) {
                EventResponseType[EventResponseType["UNKNOWN"] = 0] = "UNKNOWN";
                EventResponseType[EventResponseType["GOING"] = 1] = "GOING";
                EventResponseType[EventResponseType["NOT_GOING"] = 2] = "NOT_GOING";
                EventResponseType[EventResponseType["MAYBE"] = 3] = "MAYBE";
            })(EventResponseType || (EventResponseType = {}));
        })(EventResponseMessage || (EventResponseMessage = {}));
        /** Represents an ExtendedTextMessage. */
        class ExtendedTextMessage {
        }
        (function (ExtendedTextMessage) {
            /** FontType enum. */
            let FontType;
            (function (FontType) {
                FontType[FontType["SYSTEM"] = 0] = "SYSTEM";
                FontType[FontType["SYSTEM_TEXT"] = 1] = "SYSTEM_TEXT";
                FontType[FontType["FB_SCRIPT"] = 2] = "FB_SCRIPT";
                FontType[FontType["SYSTEM_BOLD"] = 6] = "SYSTEM_BOLD";
                FontType[FontType["MORNINGBREEZE_REGULAR"] = 7] = "MORNINGBREEZE_REGULAR";
                FontType[FontType["CALISTOGA_REGULAR"] = 8] = "CALISTOGA_REGULAR";
                FontType[FontType["EXO2_EXTRABOLD"] = 9] = "EXO2_EXTRABOLD";
                FontType[FontType["COURIERPRIME_BOLD"] = 10] = "COURIERPRIME_BOLD";
            })(FontType || (FontType = {}));
            /** InviteLinkGroupType enum. */
            let InviteLinkGroupType;
            (function (InviteLinkGroupType) {
                InviteLinkGroupType[InviteLinkGroupType["DEFAULT"] = 0] = "DEFAULT";
                InviteLinkGroupType[InviteLinkGroupType["PARENT"] = 1] = "PARENT";
                InviteLinkGroupType[InviteLinkGroupType["SUB"] = 2] = "SUB";
                InviteLinkGroupType[InviteLinkGroupType["DEFAULT_SUB"] = 3] = "DEFAULT_SUB";
            })(InviteLinkGroupType || (InviteLinkGroupType = {}));
            /** PreviewType enum. */
            let PreviewType;
            (function (PreviewType) {
                PreviewType[PreviewType["NONE"] = 0] = "NONE";
                PreviewType[PreviewType["VIDEO"] = 1] = "VIDEO";
                PreviewType[PreviewType["PLACEHOLDER"] = 4] = "PLACEHOLDER";
                PreviewType[PreviewType["IMAGE"] = 5] = "IMAGE";
                PreviewType[PreviewType["PAYMENT_LINKS"] = 6] = "PAYMENT_LINKS";
                PreviewType[PreviewType["PROFILE"] = 7] = "PROFILE";
            })(PreviewType || (PreviewType = {}));
        })(ExtendedTextMessage || (ExtendedTextMessage = {}));
        /** Represents a FullHistorySyncOnDemandRequestMetadata. */
        class FullHistorySyncOnDemandRequestMetadata {
        }
        /** Represents a FutureProofMessage. */
        class FutureProofMessage {
        }
        /** Represents a GroupInviteMessage. */
        class GroupInviteMessage {
        }
        (function (GroupInviteMessage) {
            /** GroupType enum. */
            let GroupType;
            (function (GroupType) {
                GroupType[GroupType["DEFAULT"] = 0] = "DEFAULT";
                GroupType[GroupType["PARENT"] = 1] = "PARENT";
            })(GroupType || (GroupType = {}));
        })(GroupInviteMessage || (GroupInviteMessage = {}));
        /** Represents a HighlyStructuredMessage. */
        class HighlyStructuredMessage {
        }
        (function (HighlyStructuredMessage) {
            /** Represents a HSMLocalizableParameter. */
            class HSMLocalizableParameter {
            }
            (function (HSMLocalizableParameter) {
                /** Represents a HSMCurrency. */
                class HSMCurrency {
                }
                /** Represents a HSMDateTime. */
                class HSMDateTime {
                }
                (function (HSMDateTime) {
                    /** Represents a HSMDateTimeComponent. */
                    class HSMDateTimeComponent {
                    }
                    (function (HSMDateTimeComponent) {
                        /** CalendarType enum. */
                        let CalendarType;
                        (function (CalendarType) {
                            CalendarType[CalendarType["GREGORIAN"] = 1] = "GREGORIAN";
                            CalendarType[CalendarType["SOLAR_HIJRI"] = 2] = "SOLAR_HIJRI";
                        })(CalendarType || (CalendarType = {}));
                        /** DayOfWeekType enum. */
                        let DayOfWeekType;
                        (function (DayOfWeekType) {
                            DayOfWeekType[DayOfWeekType["MONDAY"] = 1] = "MONDAY";
                            DayOfWeekType[DayOfWeekType["TUESDAY"] = 2] = "TUESDAY";
                            DayOfWeekType[DayOfWeekType["WEDNESDAY"] = 3] = "WEDNESDAY";
                            DayOfWeekType[DayOfWeekType["THURSDAY"] = 4] = "THURSDAY";
                            DayOfWeekType[DayOfWeekType["FRIDAY"] = 5] = "FRIDAY";
                            DayOfWeekType[DayOfWeekType["SATURDAY"] = 6] = "SATURDAY";
                            DayOfWeekType[DayOfWeekType["SUNDAY"] = 7] = "SUNDAY";
                        })(DayOfWeekType || (DayOfWeekType = {}));
                    })(HSMDateTimeComponent || (HSMDateTimeComponent = {}));
                    /** Represents a HSMDateTimeUnixEpoch. */
                    class HSMDateTimeUnixEpoch {
                    }
                })(HSMDateTime || (HSMDateTime = {}));
            })(HSMLocalizableParameter || (HSMLocalizableParameter = {}));
        })(HighlyStructuredMessage || (HighlyStructuredMessage = {}));
        /** Represents a HistorySyncNotification. */
        class HistorySyncNotification {
        }
        (function (HistorySyncNotification) {
            /** HistorySyncType enum. */
            let HistorySyncType;
            (function (HistorySyncType) {
                HistorySyncType[HistorySyncType["INITIAL_BOOTSTRAP"] = 0] = "INITIAL_BOOTSTRAP";
                HistorySyncType[HistorySyncType["INITIAL_STATUS_V3"] = 1] = "INITIAL_STATUS_V3";
                HistorySyncType[HistorySyncType["FULL"] = 2] = "FULL";
                HistorySyncType[HistorySyncType["RECENT"] = 3] = "RECENT";
                HistorySyncType[HistorySyncType["PUSH_NAME"] = 4] = "PUSH_NAME";
                HistorySyncType[HistorySyncType["NON_BLOCKING_DATA"] = 5] = "NON_BLOCKING_DATA";
                HistorySyncType[HistorySyncType["ON_DEMAND"] = 6] = "ON_DEMAND";
                HistorySyncType[HistorySyncType["NO_HISTORY"] = 7] = "NO_HISTORY";
            })(HistorySyncType || (HistorySyncType = {}));
        })(HistorySyncNotification || (HistorySyncNotification = {}));
        /** Represents an ImageMessage. */
        class ImageMessage {
        }
        (function (ImageMessage) {
            /** ImageSourceType enum. */
            let ImageSourceType;
            (function (ImageSourceType) {
                ImageSourceType[ImageSourceType["USER_IMAGE"] = 0] = "USER_IMAGE";
                ImageSourceType[ImageSourceType["AI_GENERATED"] = 1] = "AI_GENERATED";
                ImageSourceType[ImageSourceType["AI_MODIFIED"] = 2] = "AI_MODIFIED";
                ImageSourceType[ImageSourceType["RASTERIZED_TEXT_STATUS"] = 3] = "RASTERIZED_TEXT_STATUS";
            })(ImageSourceType || (ImageSourceType = {}));
        })(ImageMessage || (ImageMessage = {}));
        /** Represents an InitialSecurityNotificationSettingSync. */
        class InitialSecurityNotificationSettingSync {
        }
        /** Represents an InteractiveMessage. */
        class InteractiveMessage {
        }
        (function (InteractiveMessage) {
            /** Represents a Body. */
            class Body {
            }
            /** Represents a CarouselMessage. */
            class CarouselMessage {
            }
            /** Represents a CollectionMessage. */
            class CollectionMessage {
            }
            /** Represents a Footer. */
            class Footer {
            }
            /** Represents a Header. */
            class Header {
            }
            /** Represents a NativeFlowMessage. */
            class NativeFlowMessage {
            }
            (function (NativeFlowMessage) {
                /** Represents a NativeFlowButton. */
                class NativeFlowButton {
                }
            })(NativeFlowMessage || (NativeFlowMessage = {}));
            /** Represents a ShopMessage. */
            class ShopMessage {
            }
            (function (ShopMessage) {
                /** Surface enum. */
                let Surface;
                (function (Surface) {
                    Surface[Surface["UNKNOWN_SURFACE"] = 0] = "UNKNOWN_SURFACE";
                    Surface[Surface["FB"] = 1] = "FB";
                    Surface[Surface["IG"] = 2] = "IG";
                    Surface[Surface["WA"] = 3] = "WA";
                })(Surface || (Surface = {}));
            })(ShopMessage || (ShopMessage = {}));
        })(InteractiveMessage || (InteractiveMessage = {}));
        /** Represents an InteractiveResponseMessage. */
        class InteractiveResponseMessage {
        }
        (function (InteractiveResponseMessage) {
            /** Represents a Body. */
            class Body {
            }
            (function (Body) {
                /** Format enum. */
                let Format;
                (function (Format) {
                    Format[Format["DEFAULT"] = 0] = "DEFAULT";
                    Format[Format["EXTENSIONS_1"] = 1] = "EXTENSIONS_1";
                })(Format || (Format = {}));
            })(Body || (Body = {}));
            /** Represents a NativeFlowResponseMessage. */
            class NativeFlowResponseMessage {
            }
        })(InteractiveResponseMessage || (InteractiveResponseMessage = {}));
        /** Represents an InvoiceMessage. */
        class InvoiceMessage {
        }
        (function (InvoiceMessage) {
            /** AttachmentType enum. */
            let AttachmentType;
            (function (AttachmentType) {
                AttachmentType[AttachmentType["IMAGE"] = 0] = "IMAGE";
                AttachmentType[AttachmentType["PDF"] = 1] = "PDF";
            })(AttachmentType || (AttachmentType = {}));
        })(InvoiceMessage || (InvoiceMessage = {}));
        /** Represents a KeepInChatMessage. */
        class KeepInChatMessage {
        }
        /** Represents a LinkPreviewMetadata. */
        class LinkPreviewMetadata {
        }
        /** Represents a ListMessage. */
        class ListMessage {
        }
        (function (ListMessage) {
            /** ListType enum. */
            let ListType;
            (function (ListType) {
                ListType[ListType["UNKNOWN"] = 0] = "UNKNOWN";
                ListType[ListType["SINGLE_SELECT"] = 1] = "SINGLE_SELECT";
                ListType[ListType["PRODUCT_LIST"] = 2] = "PRODUCT_LIST";
            })(ListType || (ListType = {}));
            /** Represents a Product. */
            class Product {
            }
            /** Represents a ProductListHeaderImage. */
            class ProductListHeaderImage {
            }
            /** Represents a ProductListInfo. */
            class ProductListInfo {
            }
            /** Represents a ProductSection. */
            class ProductSection {
            }
            /** Represents a Row. */
            class Row {
            }
            /** Represents a Section. */
            class Section {
            }
        })(ListMessage || (ListMessage = {}));
        /** Represents a ListResponseMessage. */
        class ListResponseMessage {
        }
        (function (ListResponseMessage) {
            /** ListType enum. */
            let ListType;
            (function (ListType) {
                ListType[ListType["UNKNOWN"] = 0] = "UNKNOWN";
                ListType[ListType["SINGLE_SELECT"] = 1] = "SINGLE_SELECT";
            })(ListType || (ListType = {}));
            /** Represents a SingleSelectReply. */
            class SingleSelectReply {
            }
        })(ListResponseMessage || (ListResponseMessage = {}));
        /** Represents a LiveLocationMessage. */
        class LiveLocationMessage {
        }
        /** Represents a LocationMessage. */
        class LocationMessage {
        }
        /** Represents a MMSThumbnailMetadata. */
        class MMSThumbnailMetadata {
        }
        /** Represents a MessageHistoryBundle. */
        class MessageHistoryBundle {
        }
        /** Represents a MessageHistoryMetadata. */
        class MessageHistoryMetadata {
        }
        /** Represents a MessageHistoryNotice. */
        class MessageHistoryNotice {
        }
        /** Represents a NewsletterAdminInviteMessage. */
        class NewsletterAdminInviteMessage {
        }
        /** Represents an OrderMessage. */
        class OrderMessage {
        }
        (function (OrderMessage) {
            /** OrderStatus enum. */
            let OrderStatus;
            (function (OrderStatus) {
                OrderStatus[OrderStatus["INQUIRY"] = 1] = "INQUIRY";
                OrderStatus[OrderStatus["ACCEPTED"] = 2] = "ACCEPTED";
                OrderStatus[OrderStatus["DECLINED"] = 3] = "DECLINED";
            })(OrderStatus || (OrderStatus = {}));
            /** OrderSurface enum. */
            let OrderSurface;
            (function (OrderSurface) {
                OrderSurface[OrderSurface["CATALOG"] = 1] = "CATALOG";
            })(OrderSurface || (OrderSurface = {}));
        })(OrderMessage || (OrderMessage = {}));
        /** Represents a PaymentInviteMessage. */
        class PaymentInviteMessage {
        }
        (function (PaymentInviteMessage) {
            /** ServiceType enum. */
            let ServiceType;
            (function (ServiceType) {
                ServiceType[ServiceType["UNKNOWN"] = 0] = "UNKNOWN";
                ServiceType[ServiceType["FBPAY"] = 1] = "FBPAY";
                ServiceType[ServiceType["NOVI"] = 2] = "NOVI";
                ServiceType[ServiceType["UPI"] = 3] = "UPI";
            })(ServiceType || (ServiceType = {}));
        })(PaymentInviteMessage || (PaymentInviteMessage = {}));
        /** Represents a PaymentLinkMetadata. */
        class PaymentLinkMetadata {
        }
        (function (PaymentLinkMetadata) {
            /** Represents a PaymentLinkButton. */
            class PaymentLinkButton {
            }
            /** Represents a PaymentLinkHeader. */
            class PaymentLinkHeader {
            }
            (function (PaymentLinkHeader) {
                /** PaymentLinkHeaderType enum. */
                let PaymentLinkHeaderType;
                (function (PaymentLinkHeaderType) {
                    PaymentLinkHeaderType[PaymentLinkHeaderType["LINK_PREVIEW"] = 0] = "LINK_PREVIEW";
                    PaymentLinkHeaderType[PaymentLinkHeaderType["ORDER"] = 1] = "ORDER";
                })(PaymentLinkHeaderType || (PaymentLinkHeaderType = {}));
            })(PaymentLinkHeader || (PaymentLinkHeader = {}));
        })(PaymentLinkMetadata || (PaymentLinkMetadata = {}));
        /** Represents a PeerDataOperationRequestMessage. */
        class PeerDataOperationRequestMessage {
        }
        (function (PeerDataOperationRequestMessage) {
            /** Represents a FullHistorySyncOnDemandRequest. */
            class FullHistorySyncOnDemandRequest {
            }
            /** Represents a HistorySyncOnDemandRequest. */
            class HistorySyncOnDemandRequest {
            }
            /** Represents a PlaceholderMessageResendRequest. */
            class PlaceholderMessageResendRequest {
            }
            /** Represents a RequestStickerReupload. */
            class RequestStickerReupload {
            }
            /** Represents a RequestUrlPreview. */
            class RequestUrlPreview {
            }
            /** Represents a SyncDCollectionFatalRecoveryRequest. */
            class SyncDCollectionFatalRecoveryRequest {
            }
        })(PeerDataOperationRequestMessage || (PeerDataOperationRequestMessage = {}));
        /** Represents a PeerDataOperationRequestResponseMessage. */
        class PeerDataOperationRequestResponseMessage {
        }
        (function (PeerDataOperationRequestResponseMessage) {
            /** Represents a PeerDataOperationResult. */
            class PeerDataOperationResult {
            }
            (function (PeerDataOperationResult) {
                /** Represents a CompanionMetaNonceFetchResponse. */
                class CompanionMetaNonceFetchResponse {
                }
                /** Represents a FullHistorySyncOnDemandRequestResponse. */
                class FullHistorySyncOnDemandRequestResponse {
                }
                /** FullHistorySyncOnDemandResponseCode enum. */
                let FullHistorySyncOnDemandResponseCode;
                (function (FullHistorySyncOnDemandResponseCode) {
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["REQUEST_SUCCESS"] = 0] = "REQUEST_SUCCESS";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["REQUEST_TIME_EXPIRED"] = 1] = "REQUEST_TIME_EXPIRED";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["DECLINED_SHARING_HISTORY"] = 2] = "DECLINED_SHARING_HISTORY";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["GENERIC_ERROR"] = 3] = "GENERIC_ERROR";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["ERROR_REQUEST_ON_NON_SMB_PRIMARY"] = 4] = "ERROR_REQUEST_ON_NON_SMB_PRIMARY";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["ERROR_HOSTED_DEVICE_NOT_CONNECTED"] = 5] = "ERROR_HOSTED_DEVICE_NOT_CONNECTED";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET"] = 6] = "ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET";
                })(FullHistorySyncOnDemandResponseCode || (FullHistorySyncOnDemandResponseCode = {}));
                /** Represents a LinkPreviewResponse. */
                class LinkPreviewResponse {
                }
                (function (LinkPreviewResponse) {
                    /** Represents a LinkPreviewHighQualityThumbnail. */
                    class LinkPreviewHighQualityThumbnail {
                    }
                })(LinkPreviewResponse || (LinkPreviewResponse = {}));
                /** Represents a PlaceholderMessageResendResponse. */
                class PlaceholderMessageResendResponse {
                }
                /** Represents a SyncDSnapshotFatalRecoveryResponse. */
                class SyncDSnapshotFatalRecoveryResponse {
                }
                /** Represents a WaffleNonceFetchResponse. */
                class WaffleNonceFetchResponse {
                }
            })(PeerDataOperationResult || (PeerDataOperationResult = {}));
        })(PeerDataOperationRequestResponseMessage || (PeerDataOperationRequestResponseMessage = {}));
        /** PeerDataOperationRequestType enum. */
        let PeerDataOperationRequestType;
        (function (PeerDataOperationRequestType) {
            PeerDataOperationRequestType[PeerDataOperationRequestType["UPLOAD_STICKER"] = 0] = "UPLOAD_STICKER";
            PeerDataOperationRequestType[PeerDataOperationRequestType["SEND_RECENT_STICKER_BOOTSTRAP"] = 1] = "SEND_RECENT_STICKER_BOOTSTRAP";
            PeerDataOperationRequestType[PeerDataOperationRequestType["GENERATE_LINK_PREVIEW"] = 2] = "GENERATE_LINK_PREVIEW";
            PeerDataOperationRequestType[PeerDataOperationRequestType["HISTORY_SYNC_ON_DEMAND"] = 3] = "HISTORY_SYNC_ON_DEMAND";
            PeerDataOperationRequestType[PeerDataOperationRequestType["PLACEHOLDER_MESSAGE_RESEND"] = 4] = "PLACEHOLDER_MESSAGE_RESEND";
            PeerDataOperationRequestType[PeerDataOperationRequestType["WAFFLE_LINKING_NONCE_FETCH"] = 5] = "WAFFLE_LINKING_NONCE_FETCH";
            PeerDataOperationRequestType[PeerDataOperationRequestType["FULL_HISTORY_SYNC_ON_DEMAND"] = 6] = "FULL_HISTORY_SYNC_ON_DEMAND";
            PeerDataOperationRequestType[PeerDataOperationRequestType["COMPANION_META_NONCE_FETCH"] = 7] = "COMPANION_META_NONCE_FETCH";
            PeerDataOperationRequestType[PeerDataOperationRequestType["COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY"] = 8] = "COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY";
        })(PeerDataOperationRequestType || (PeerDataOperationRequestType = {}));
        /** Represents a PinInChatMessage. */
        class PinInChatMessage {
        }
        (function (PinInChatMessage) {
            /** Type enum. */
            let Type;
            (function (Type) {
                Type[Type["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
                Type[Type["PIN_FOR_ALL"] = 1] = "PIN_FOR_ALL";
                Type[Type["UNPIN_FOR_ALL"] = 2] = "UNPIN_FOR_ALL";
            })(Type || (Type = {}));
        })(PinInChatMessage || (PinInChatMessage = {}));
        /** Represents a PlaceholderMessage. */
        class PlaceholderMessage {
        }
        (function (PlaceholderMessage) {
            /** PlaceholderType enum. */
            let PlaceholderType;
            (function (PlaceholderType) {
                PlaceholderType[PlaceholderType["MASK_LINKED_DEVICES"] = 0] = "MASK_LINKED_DEVICES";
            })(PlaceholderType || (PlaceholderType = {}));
        })(PlaceholderMessage || (PlaceholderMessage = {}));
        /** PollContentType enum. */
        let PollContentType;
        (function (PollContentType) {
            PollContentType[PollContentType["UNKNOWN"] = 0] = "UNKNOWN";
            PollContentType[PollContentType["TEXT"] = 1] = "TEXT";
            PollContentType[PollContentType["IMAGE"] = 2] = "IMAGE";
        })(PollContentType || (PollContentType = {}));
        /** Represents a PollCreationMessage. */
        class PollCreationMessage {
        }
        (function (PollCreationMessage) {
            /** Represents an Option. */
            class Option {
            }
            /** PollType enum. */
            let PollType;
            (function (PollType) {
                PollType[PollType["POLL"] = 0] = "POLL";
                PollType[PollType["QUIZ"] = 1] = "QUIZ";
            })(PollType || (PollType = {}));
        })(PollCreationMessage || (PollCreationMessage = {}));
        /** Represents a PollEncValue. */
        class PollEncValue {
        }
        /** Represents a PollResultSnapshotMessage. */
        class PollResultSnapshotMessage {
        }
        (function (PollResultSnapshotMessage) {
            /** Represents a PollVote. */
            class PollVote {
            }
        })(PollResultSnapshotMessage || (PollResultSnapshotMessage = {}));
        /** Represents a PollUpdateMessage. */
        class PollUpdateMessage {
        }
        /** Represents a PollUpdateMessageMetadata. */
        class PollUpdateMessageMetadata {
        }
        /** Represents a PollVoteMessage. */
        class PollVoteMessage {
        }
        /** Represents a ProductMessage. */
        class ProductMessage {
        }
        (function (ProductMessage) {
            /** Represents a CatalogSnapshot. */
            class CatalogSnapshot {
            }
            /** Represents a ProductSnapshot. */
            class ProductSnapshot {
            }
        })(ProductMessage || (ProductMessage = {}));
        /** Represents a ProtocolMessage. */
        class ProtocolMessage {
        }
        (function (ProtocolMessage) {
            /** Type enum. */
            let Type;
            (function (Type) {
                Type[Type["REVOKE"] = 0] = "REVOKE";
                Type[Type["EPHEMERAL_SETTING"] = 3] = "EPHEMERAL_SETTING";
                Type[Type["EPHEMERAL_SYNC_RESPONSE"] = 4] = "EPHEMERAL_SYNC_RESPONSE";
                Type[Type["HISTORY_SYNC_NOTIFICATION"] = 5] = "HISTORY_SYNC_NOTIFICATION";
                Type[Type["APP_STATE_SYNC_KEY_SHARE"] = 6] = "APP_STATE_SYNC_KEY_SHARE";
                Type[Type["APP_STATE_SYNC_KEY_REQUEST"] = 7] = "APP_STATE_SYNC_KEY_REQUEST";
                Type[Type["MSG_FANOUT_BACKFILL_REQUEST"] = 8] = "MSG_FANOUT_BACKFILL_REQUEST";
                Type[Type["INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC"] = 9] = "INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC";
                Type[Type["APP_STATE_FATAL_EXCEPTION_NOTIFICATION"] = 10] = "APP_STATE_FATAL_EXCEPTION_NOTIFICATION";
                Type[Type["SHARE_PHONE_NUMBER"] = 11] = "SHARE_PHONE_NUMBER";
                Type[Type["MESSAGE_EDIT"] = 14] = "MESSAGE_EDIT";
                Type[Type["PEER_DATA_OPERATION_REQUEST_MESSAGE"] = 16] = "PEER_DATA_OPERATION_REQUEST_MESSAGE";
                Type[Type["PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE"] = 17] = "PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE";
                Type[Type["REQUEST_WELCOME_MESSAGE"] = 18] = "REQUEST_WELCOME_MESSAGE";
                Type[Type["BOT_FEEDBACK_MESSAGE"] = 19] = "BOT_FEEDBACK_MESSAGE";
                Type[Type["MEDIA_NOTIFY_MESSAGE"] = 20] = "MEDIA_NOTIFY_MESSAGE";
                Type[Type["CLOUD_API_THREAD_CONTROL_NOTIFICATION"] = 21] = "CLOUD_API_THREAD_CONTROL_NOTIFICATION";
                Type[Type["LID_MIGRATION_MAPPING_SYNC"] = 22] = "LID_MIGRATION_MAPPING_SYNC";
                Type[Type["REMINDER_MESSAGE"] = 23] = "REMINDER_MESSAGE";
                Type[Type["BOT_MEMU_ONBOARDING_MESSAGE"] = 24] = "BOT_MEMU_ONBOARDING_MESSAGE";
                Type[Type["STATUS_MENTION_MESSAGE"] = 25] = "STATUS_MENTION_MESSAGE";
                Type[Type["STOP_GENERATION_MESSAGE"] = 26] = "STOP_GENERATION_MESSAGE";
                Type[Type["LIMIT_SHARING"] = 27] = "LIMIT_SHARING";
                Type[Type["AI_PSI_METADATA"] = 28] = "AI_PSI_METADATA";
                Type[Type["AI_QUERY_FANOUT"] = 29] = "AI_QUERY_FANOUT";
                Type[Type["GROUP_MEMBER_LABEL_CHANGE"] = 30] = "GROUP_MEMBER_LABEL_CHANGE";
            })(Type || (Type = {}));
        })(ProtocolMessage || (ProtocolMessage = {}));
        /** Represents a ReactionMessage. */
        class ReactionMessage {
        }
        /** Represents a RequestPaymentMessage. */
        class RequestPaymentMessage {
        }
        /** Represents a RequestPhoneNumberMessage. */
        class RequestPhoneNumberMessage {
        }
        /** Represents a RequestWelcomeMessageMetadata. */
        class RequestWelcomeMessageMetadata {
        }
        (function (RequestWelcomeMessageMetadata) {
            /** LocalChatState enum. */
            let LocalChatState;
            (function (LocalChatState) {
                LocalChatState[LocalChatState["EMPTY"] = 0] = "EMPTY";
                LocalChatState[LocalChatState["NON_EMPTY"] = 1] = "NON_EMPTY";
            })(LocalChatState || (LocalChatState = {}));
        })(RequestWelcomeMessageMetadata || (RequestWelcomeMessageMetadata = {}));
        /** Represents a ScheduledCallCreationMessage. */
        class ScheduledCallCreationMessage {
        }
        (function (ScheduledCallCreationMessage) {
            /** CallType enum. */
            let CallType;
            (function (CallType) {
                CallType[CallType["UNKNOWN"] = 0] = "UNKNOWN";
                CallType[CallType["VOICE"] = 1] = "VOICE";
                CallType[CallType["VIDEO"] = 2] = "VIDEO";
            })(CallType || (CallType = {}));
        })(ScheduledCallCreationMessage || (ScheduledCallCreationMessage = {}));
        /** Represents a ScheduledCallEditMessage. */
        class ScheduledCallEditMessage {
        }
        (function (ScheduledCallEditMessage) {
            /** EditType enum. */
            let EditType;
            (function (EditType) {
                EditType[EditType["UNKNOWN"] = 0] = "UNKNOWN";
                EditType[EditType["CANCEL"] = 1] = "CANCEL";
            })(EditType || (EditType = {}));
        })(ScheduledCallEditMessage || (ScheduledCallEditMessage = {}));
        /** Represents a SecretEncryptedMessage. */
        class SecretEncryptedMessage {
        }
        (function (SecretEncryptedMessage) {
            /** SecretEncType enum. */
            let SecretEncType;
            (function (SecretEncType) {
                SecretEncType[SecretEncType["UNKNOWN"] = 0] = "UNKNOWN";
                SecretEncType[SecretEncType["EVENT_EDIT"] = 1] = "EVENT_EDIT";
                SecretEncType[SecretEncType["MESSAGE_EDIT"] = 2] = "MESSAGE_EDIT";
            })(SecretEncType || (SecretEncType = {}));
        })(SecretEncryptedMessage || (SecretEncryptedMessage = {}));
        /** Represents a SendPaymentMessage. */
        class SendPaymentMessage {
        }
        /** Represents a SenderKeyDistributionMessage. */
        class SenderKeyDistributionMessage {
        }
        /** Represents a StatusNotificationMessage. */
        class StatusNotificationMessage {
        }
        (function (StatusNotificationMessage) {
            /** StatusNotificationType enum. */
            let StatusNotificationType;
            (function (StatusNotificationType) {
                StatusNotificationType[StatusNotificationType["UNKNOWN"] = 0] = "UNKNOWN";
                StatusNotificationType[StatusNotificationType["STATUS_ADD_YOURS"] = 1] = "STATUS_ADD_YOURS";
                StatusNotificationType[StatusNotificationType["STATUS_RESHARE"] = 2] = "STATUS_RESHARE";
            })(StatusNotificationType || (StatusNotificationType = {}));
        })(StatusNotificationMessage || (StatusNotificationMessage = {}));
        /** Represents a StickerMessage. */
        class StickerMessage {
        }
        /** Represents a StickerPackMessage. */
        class StickerPackMessage {
        }
        (function (StickerPackMessage) {
            /** Represents a Sticker. */
            class Sticker {
            }
            /** StickerPackOrigin enum. */
            let StickerPackOrigin;
            (function (StickerPackOrigin) {
                StickerPackOrigin[StickerPackOrigin["FIRST_PARTY"] = 0] = "FIRST_PARTY";
                StickerPackOrigin[StickerPackOrigin["THIRD_PARTY"] = 1] = "THIRD_PARTY";
                StickerPackOrigin[StickerPackOrigin["USER_CREATED"] = 2] = "USER_CREATED";
            })(StickerPackOrigin || (StickerPackOrigin = {}));
        })(StickerPackMessage || (StickerPackMessage = {}));
        /** Represents a StickerSyncRMRMessage. */
        class StickerSyncRMRMessage {
        }
        /** Represents a TemplateButtonReplyMessage. */
        class TemplateButtonReplyMessage {
        }
        /** Represents a TemplateMessage. */
        class TemplateMessage {
        }
        (function (TemplateMessage) {
            /** Represents a FourRowTemplate. */
            class FourRowTemplate {
            }
            /** Represents a HydratedFourRowTemplate. */
            class HydratedFourRowTemplate {
            }
        })(TemplateMessage || (TemplateMessage = {}));
        /** Represents a URLMetadata. */
        class URLMetadata {
        }
        /** Represents a VideoMessage. */
        class VideoMessage {
        }
        (function (VideoMessage) {
            /** Attribution enum. */
            let Attribution;
            (function (Attribution) {
                Attribution[Attribution["NONE"] = 0] = "NONE";
                Attribution[Attribution["GIPHY"] = 1] = "GIPHY";
                Attribution[Attribution["TENOR"] = 2] = "TENOR";
            })(Attribution || (Attribution = {}));
        })(VideoMessage || (VideoMessage = {}));
    })(Message || (Message = {}));
    /** Represents a MessageAddOn. */
    class MessageAddOn {
    }
    (function (MessageAddOn) {
        /** MessageAddOnType enum. */
        let MessageAddOnType;
        (function (MessageAddOnType) {
            MessageAddOnType[MessageAddOnType["UNDEFINED"] = 0] = "UNDEFINED";
            MessageAddOnType[MessageAddOnType["REACTION"] = 1] = "REACTION";
            MessageAddOnType[MessageAddOnType["EVENT_RESPONSE"] = 2] = "EVENT_RESPONSE";
            MessageAddOnType[MessageAddOnType["POLL_UPDATE"] = 3] = "POLL_UPDATE";
            MessageAddOnType[MessageAddOnType["PIN_IN_CHAT"] = 4] = "PIN_IN_CHAT";
        })(MessageAddOnType || (MessageAddOnType = {}));
    })(MessageAddOn || (MessageAddOn = {}));
    /** Represents a MessageAddOnContextInfo. */
    class MessageAddOnContextInfo {
    }
    /** Represents a MessageAssociation. */
    class MessageAssociation {
    }
    (function (MessageAssociation) {
        /** AssociationType enum. */
        let AssociationType;
        (function (AssociationType) {
            AssociationType[AssociationType["UNKNOWN"] = 0] = "UNKNOWN";
            AssociationType[AssociationType["MEDIA_ALBUM"] = 1] = "MEDIA_ALBUM";
            AssociationType[AssociationType["BOT_PLUGIN"] = 2] = "BOT_PLUGIN";
            AssociationType[AssociationType["EVENT_COVER_IMAGE"] = 3] = "EVENT_COVER_IMAGE";
            AssociationType[AssociationType["STATUS_POLL"] = 4] = "STATUS_POLL";
            AssociationType[AssociationType["HD_VIDEO_DUAL_UPLOAD"] = 5] = "HD_VIDEO_DUAL_UPLOAD";
            AssociationType[AssociationType["STATUS_EXTERNAL_RESHARE"] = 6] = "STATUS_EXTERNAL_RESHARE";
            AssociationType[AssociationType["MEDIA_POLL"] = 7] = "MEDIA_POLL";
            AssociationType[AssociationType["STATUS_ADD_YOURS"] = 8] = "STATUS_ADD_YOURS";
            AssociationType[AssociationType["STATUS_NOTIFICATION"] = 9] = "STATUS_NOTIFICATION";
            AssociationType[AssociationType["HD_IMAGE_DUAL_UPLOAD"] = 10] = "HD_IMAGE_DUAL_UPLOAD";
            AssociationType[AssociationType["STICKER_ANNOTATION"] = 11] = "STICKER_ANNOTATION";
            AssociationType[AssociationType["MOTION_PHOTO"] = 12] = "MOTION_PHOTO";
            AssociationType[AssociationType["STATUS_LINK_ACTION"] = 13] = "STATUS_LINK_ACTION";
            AssociationType[AssociationType["VIEW_ALL_REPLIES"] = 14] = "VIEW_ALL_REPLIES";
        })(AssociationType || (AssociationType = {}));
    })(MessageAssociation || (MessageAssociation = {}));
    /** Represents a MessageContextInfo. */
    class MessageContextInfo {
    }
    (function (MessageContextInfo) {
        /** MessageAddonExpiryType enum. */
        let MessageAddonExpiryType;
        (function (MessageAddonExpiryType) {
            MessageAddonExpiryType[MessageAddonExpiryType["STATIC"] = 1] = "STATIC";
            MessageAddonExpiryType[MessageAddonExpiryType["DEPENDENT_ON_PARENT"] = 2] = "DEPENDENT_ON_PARENT";
        })(MessageAddonExpiryType || (MessageAddonExpiryType = {}));
    })(MessageContextInfo || (MessageContextInfo = {}));
    /** Represents a MessageKey. */
    class MessageKey {
    }
    /** Represents a MessageSecretMessage. */
    class MessageSecretMessage {
    }
    /** Represents a Money. */
    class Money {
    }
    /** Represents a MsgOpaqueData. */
    class MsgOpaqueData {
    }
    (function (MsgOpaqueData) {
        /** Represents an EventLocation. */
        class EventLocation {
        }
        /** PollContentType enum. */
        let PollContentType;
        (function (PollContentType) {
            PollContentType[PollContentType["UNKNOWN"] = 0] = "UNKNOWN";
            PollContentType[PollContentType["TEXT"] = 1] = "TEXT";
            PollContentType[PollContentType["IMAGE"] = 2] = "IMAGE";
        })(PollContentType || (PollContentType = {}));
        /** Represents a PollOption. */
        class PollOption {
        }
        /** Represents a PollVoteSnapshot. */
        class PollVoteSnapshot {
        }
        /** Represents a PollVotesSnapshot. */
        class PollVotesSnapshot {
        }
    })(MsgOpaqueData || (MsgOpaqueData = {}));
    /** Represents a MsgRowOpaqueData. */
    class MsgRowOpaqueData {
    }
    /** Represents a NoiseCertificate. */
    class NoiseCertificate {
    }
    (function (NoiseCertificate) {
        /** Represents a Details. */
        class Details {
        }
    })(NoiseCertificate || (NoiseCertificate = {}));
    /** Represents a NotificationMessageInfo. */
    class NotificationMessageInfo {
    }
    /** Represents a NotificationSettings. */
    class NotificationSettings {
    }
    /** Represents a PairingRequest. */
    class PairingRequest {
    }
    /** Represents a PastParticipant. */
    class PastParticipant {
    }
    (function (PastParticipant) {
        /** LeaveReason enum. */
        let LeaveReason;
        (function (LeaveReason) {
            LeaveReason[LeaveReason["LEFT"] = 0] = "LEFT";
            LeaveReason[LeaveReason["REMOVED"] = 1] = "REMOVED";
        })(LeaveReason || (LeaveReason = {}));
    })(PastParticipant || (PastParticipant = {}));
    /** Represents a PastParticipants. */
    class PastParticipants {
    }
    /** Represents a PatchDebugData. */
    class PatchDebugData {
    }
    (function (PatchDebugData) {
        /** Platform enum. */
        let Platform;
        (function (Platform) {
            Platform[Platform["ANDROID"] = 0] = "ANDROID";
            Platform[Platform["SMBA"] = 1] = "SMBA";
            Platform[Platform["IPHONE"] = 2] = "IPHONE";
            Platform[Platform["SMBI"] = 3] = "SMBI";
            Platform[Platform["WEB"] = 4] = "WEB";
            Platform[Platform["UWP"] = 5] = "UWP";
            Platform[Platform["DARWIN"] = 6] = "DARWIN";
            Platform[Platform["IPAD"] = 7] = "IPAD";
            Platform[Platform["WEAROS"] = 8] = "WEAROS";
        })(Platform || (Platform = {}));
    })(PatchDebugData || (PatchDebugData = {}));
    /** Represents a PaymentBackground. */
    class PaymentBackground {
    }
    (function (PaymentBackground) {
        /** Represents a MediaData. */
        class MediaData {
        }
        /** Type enum. */
        let Type;
        (function (Type) {
            Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
            Type[Type["DEFAULT"] = 1] = "DEFAULT";
        })(Type || (Type = {}));
    })(PaymentBackground || (PaymentBackground = {}));
    /** Represents a PaymentInfo. */
    class PaymentInfo {
    }
    (function (PaymentInfo) {
        /** Currency enum. */
        let Currency;
        (function (Currency) {
            Currency[Currency["UNKNOWN_CURRENCY"] = 0] = "UNKNOWN_CURRENCY";
            Currency[Currency["INR"] = 1] = "INR";
        })(Currency || (Currency = {}));
        /** Status enum. */
        let Status;
        (function (Status) {
            Status[Status["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
            Status[Status["PROCESSING"] = 1] = "PROCESSING";
            Status[Status["SENT"] = 2] = "SENT";
            Status[Status["NEED_TO_ACCEPT"] = 3] = "NEED_TO_ACCEPT";
            Status[Status["COMPLETE"] = 4] = "COMPLETE";
            Status[Status["COULD_NOT_COMPLETE"] = 5] = "COULD_NOT_COMPLETE";
            Status[Status["REFUNDED"] = 6] = "REFUNDED";
            Status[Status["EXPIRED"] = 7] = "EXPIRED";
            Status[Status["REJECTED"] = 8] = "REJECTED";
            Status[Status["CANCELLED"] = 9] = "CANCELLED";
            Status[Status["WAITING_FOR_PAYER"] = 10] = "WAITING_FOR_PAYER";
            Status[Status["WAITING"] = 11] = "WAITING";
        })(Status || (Status = {}));
        /** TxnStatus enum. */
        let TxnStatus;
        (function (TxnStatus) {
            TxnStatus[TxnStatus["UNKNOWN"] = 0] = "UNKNOWN";
            TxnStatus[TxnStatus["PENDING_SETUP"] = 1] = "PENDING_SETUP";
            TxnStatus[TxnStatus["PENDING_RECEIVER_SETUP"] = 2] = "PENDING_RECEIVER_SETUP";
            TxnStatus[TxnStatus["INIT"] = 3] = "INIT";
            TxnStatus[TxnStatus["SUCCESS"] = 4] = "SUCCESS";
            TxnStatus[TxnStatus["COMPLETED"] = 5] = "COMPLETED";
            TxnStatus[TxnStatus["FAILED"] = 6] = "FAILED";
            TxnStatus[TxnStatus["FAILED_RISK"] = 7] = "FAILED_RISK";
            TxnStatus[TxnStatus["FAILED_PROCESSING"] = 8] = "FAILED_PROCESSING";
            TxnStatus[TxnStatus["FAILED_RECEIVER_PROCESSING"] = 9] = "FAILED_RECEIVER_PROCESSING";
            TxnStatus[TxnStatus["FAILED_DA"] = 10] = "FAILED_DA";
            TxnStatus[TxnStatus["FAILED_DA_FINAL"] = 11] = "FAILED_DA_FINAL";
            TxnStatus[TxnStatus["REFUNDED_TXN"] = 12] = "REFUNDED_TXN";
            TxnStatus[TxnStatus["REFUND_FAILED"] = 13] = "REFUND_FAILED";
            TxnStatus[TxnStatus["REFUND_FAILED_PROCESSING"] = 14] = "REFUND_FAILED_PROCESSING";
            TxnStatus[TxnStatus["REFUND_FAILED_DA"] = 15] = "REFUND_FAILED_DA";
            TxnStatus[TxnStatus["EXPIRED_TXN"] = 16] = "EXPIRED_TXN";
            TxnStatus[TxnStatus["AUTH_CANCELED"] = 17] = "AUTH_CANCELED";
            TxnStatus[TxnStatus["AUTH_CANCEL_FAILED_PROCESSING"] = 18] = "AUTH_CANCEL_FAILED_PROCESSING";
            TxnStatus[TxnStatus["AUTH_CANCEL_FAILED"] = 19] = "AUTH_CANCEL_FAILED";
            TxnStatus[TxnStatus["COLLECT_INIT"] = 20] = "COLLECT_INIT";
            TxnStatus[TxnStatus["COLLECT_SUCCESS"] = 21] = "COLLECT_SUCCESS";
            TxnStatus[TxnStatus["COLLECT_FAILED"] = 22] = "COLLECT_FAILED";
            TxnStatus[TxnStatus["COLLECT_FAILED_RISK"] = 23] = "COLLECT_FAILED_RISK";
            TxnStatus[TxnStatus["COLLECT_REJECTED"] = 24] = "COLLECT_REJECTED";
            TxnStatus[TxnStatus["COLLECT_EXPIRED"] = 25] = "COLLECT_EXPIRED";
            TxnStatus[TxnStatus["COLLECT_CANCELED"] = 26] = "COLLECT_CANCELED";
            TxnStatus[TxnStatus["COLLECT_CANCELLING"] = 27] = "COLLECT_CANCELLING";
            TxnStatus[TxnStatus["IN_REVIEW"] = 28] = "IN_REVIEW";
            TxnStatus[TxnStatus["REVERSAL_SUCCESS"] = 29] = "REVERSAL_SUCCESS";
            TxnStatus[TxnStatus["REVERSAL_PENDING"] = 30] = "REVERSAL_PENDING";
            TxnStatus[TxnStatus["REFUND_PENDING"] = 31] = "REFUND_PENDING";
        })(TxnStatus || (TxnStatus = {}));
    })(PaymentInfo || (PaymentInfo = {}));
    /** Represents a PhoneNumberToLIDMapping. */
    class PhoneNumberToLIDMapping {
    }
    /** Represents a PhotoChange. */
    class PhotoChange {
    }
    /** Represents a PinInChat. */
    class PinInChat {
    }
    (function (PinInChat) {
        /** Type enum. */
        let Type;
        (function (Type) {
            Type[Type["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
            Type[Type["PIN_FOR_ALL"] = 1] = "PIN_FOR_ALL";
            Type[Type["UNPIN_FOR_ALL"] = 2] = "UNPIN_FOR_ALL";
        })(Type || (Type = {}));
    })(PinInChat || (PinInChat = {}));
    /** Represents a Point. */
    class Point {
    }
    /** Represents a PollAdditionalMetadata. */
    class PollAdditionalMetadata {
    }
    /** Represents a PollEncValue. */
    class PollEncValue {
    }
    /** Represents a PollUpdate. */
    class PollUpdate {
    }
    /** Represents a PreKeyRecordStructure. */
    class PreKeyRecordStructure {
    }
    /** Represents a PreKeySignalMessage. */
    class PreKeySignalMessage {
    }
    /** Represents a PremiumMessageInfo. */
    class PremiumMessageInfo {
    }
    /** Represents a PrimaryEphemeralIdentity. */
    class PrimaryEphemeralIdentity {
    }
    /** PrivacySystemMessage enum. */
    let PrivacySystemMessage;
    (function (PrivacySystemMessage) {
        PrivacySystemMessage[PrivacySystemMessage["E2EE_MSG"] = 1] = "E2EE_MSG";
        PrivacySystemMessage[PrivacySystemMessage["NE2EE_SELF"] = 2] = "NE2EE_SELF";
        PrivacySystemMessage[PrivacySystemMessage["NE2EE_OTHER"] = 3] = "NE2EE_OTHER";
    })(PrivacySystemMessage || (PrivacySystemMessage = {}));
    /** Represents a ProcessedVideo. */
    class ProcessedVideo {
    }
    (function (ProcessedVideo) {
        /** VideoQuality enum. */
        let VideoQuality;
        (function (VideoQuality) {
            VideoQuality[VideoQuality["UNDEFINED"] = 0] = "UNDEFINED";
            VideoQuality[VideoQuality["LOW"] = 1] = "LOW";
            VideoQuality[VideoQuality["MID"] = 2] = "MID";
            VideoQuality[VideoQuality["HIGH"] = 3] = "HIGH";
        })(VideoQuality || (VideoQuality = {}));
    })(ProcessedVideo || (ProcessedVideo = {}));
    /** Represents a ProloguePayload. */
    class ProloguePayload {
    }
    /** Represents a Pushname. */
    class Pushname {
    }
    /** Represents a Reaction. */
    class Reaction {
    }
    /** Represents a RecentEmojiWeight. */
    class RecentEmojiWeight {
    }
    /** Represents a RecordStructure. */
    class RecordStructure {
    }
    /** Represents a Reportable. */
    class Reportable {
    }
    /** Represents a ReportingTokenInfo. */
    class ReportingTokenInfo {
    }
    /** Represents a SenderKeyDistributionMessage. */
    class SenderKeyDistributionMessage {
    }
    /** Represents a SenderKeyMessage. */
    class SenderKeyMessage {
    }
    /** Represents a SenderKeyRecordStructure. */
    class SenderKeyRecordStructure {
    }
    /** Represents a SenderKeyStateStructure. */
    class SenderKeyStateStructure {
    }
    (function (SenderKeyStateStructure) {
        /** Represents a SenderChainKey. */
        class SenderChainKey {
        }
        /** Represents a SenderMessageKey. */
        class SenderMessageKey {
        }
        /** Represents a SenderSigningKey. */
        class SenderSigningKey {
        }
    })(SenderKeyStateStructure || (SenderKeyStateStructure = {}));
    /** Represents a ServerErrorReceipt. */
    class ServerErrorReceipt {
    }
    /** Represents a SessionStructure. */
    class SessionStructure {
    }
    (function (SessionStructure) {
        /** Represents a Chain. */
        class Chain {
        }
        (function (Chain) {
            /** Represents a ChainKey. */
            class ChainKey {
            }
            /** Represents a MessageKey. */
            class MessageKey {
            }
        })(Chain || (Chain = {}));
        /** Represents a PendingKeyExchange. */
        class PendingKeyExchange {
        }
        /** Represents a PendingPreKey. */
        class PendingPreKey {
        }
    })(SessionStructure || (SessionStructure = {}));
    /** Represents a SignalMessage. */
    class SignalMessage {
    }
    /** Represents a SignedPreKeyRecordStructure. */
    class SignedPreKeyRecordStructure {
    }
    /** Represents a StatusMentionMessage. */
    class StatusMentionMessage {
    }
    /** Represents a StatusPSA. */
    class StatusPSA {
    }
    /** Represents a StickerMetadata. */
    class StickerMetadata {
    }
    /** Represents a SyncActionData. */
    class SyncActionData {
    }
    /** Represents a SyncActionValue. */
    class SyncActionValue {
    }
    (function (SyncActionValue) {
        /** Represents an AgentAction. */
        class AgentAction {
        }
        /** Represents an AndroidUnsupportedActions. */
        class AndroidUnsupportedActions {
        }
        /** Represents an ArchiveChatAction. */
        class ArchiveChatAction {
        }
        /** Represents a BotWelcomeRequestAction. */
        class BotWelcomeRequestAction {
        }
        /** Represents a CallLogAction. */
        class CallLogAction {
        }
        /** Represents a ChatAssignmentAction. */
        class ChatAssignmentAction {
        }
        /** Represents a ChatAssignmentOpenedStatusAction. */
        class ChatAssignmentOpenedStatusAction {
        }
        /** Represents a ClearChatAction. */
        class ClearChatAction {
        }
        /** Represents a ContactAction. */
        class ContactAction {
        }
        /** Represents a CtwaPerCustomerDataSharingAction. */
        class CtwaPerCustomerDataSharingAction {
        }
        /** Represents a CustomPaymentMethod. */
        class CustomPaymentMethod {
        }
        /** Represents a CustomPaymentMethodMetadata. */
        class CustomPaymentMethodMetadata {
        }
        /** Represents a CustomPaymentMethodsAction. */
        class CustomPaymentMethodsAction {
        }
        /** Represents a DeleteChatAction. */
        class DeleteChatAction {
        }
        /** Represents a DeleteIndividualCallLogAction. */
        class DeleteIndividualCallLogAction {
        }
        /** Represents a DeleteMessageForMeAction. */
        class DeleteMessageForMeAction {
        }
        /** Represents an ExternalWebBetaAction. */
        class ExternalWebBetaAction {
        }
        /** Represents a FavoritesAction. */
        class FavoritesAction {
        }
        (function (FavoritesAction) {
            /** Represents a Favorite. */
            class Favorite {
            }
        })(FavoritesAction || (FavoritesAction = {}));
        /** Represents a KeyExpiration. */
        class KeyExpiration {
        }
        /** Represents a LabelAssociationAction. */
        class LabelAssociationAction {
        }
        /** Represents a LabelEditAction. */
        class LabelEditAction {
        }
        (function (LabelEditAction) {
            /** ListType enum. */
            let ListType;
            (function (ListType) {
                ListType[ListType["NONE"] = 0] = "NONE";
                ListType[ListType["UNREAD"] = 1] = "UNREAD";
                ListType[ListType["GROUPS"] = 2] = "GROUPS";
                ListType[ListType["FAVORITES"] = 3] = "FAVORITES";
                ListType[ListType["PREDEFINED"] = 4] = "PREDEFINED";
                ListType[ListType["CUSTOM"] = 5] = "CUSTOM";
                ListType[ListType["COMMUNITY"] = 6] = "COMMUNITY";
                ListType[ListType["SERVER_ASSIGNED"] = 7] = "SERVER_ASSIGNED";
            })(ListType || (ListType = {}));
        })(LabelEditAction || (LabelEditAction = {}));
        /** Represents a LabelReorderingAction. */
        class LabelReorderingAction {
        }
        /** Represents a LidContactAction. */
        class LidContactAction {
        }
        /** Represents a LocaleSetting. */
        class LocaleSetting {
        }
        /** Represents a LockChatAction. */
        class LockChatAction {
        }
        /** Represents a MarkChatAsReadAction. */
        class MarkChatAsReadAction {
        }
        /** Represents a MarketingMessageAction. */
        class MarketingMessageAction {
        }
        (function (MarketingMessageAction) {
            /** MarketingMessagePrototypeType enum. */
            let MarketingMessagePrototypeType;
            (function (MarketingMessagePrototypeType) {
                MarketingMessagePrototypeType[MarketingMessagePrototypeType["PERSONALIZED"] = 0] = "PERSONALIZED";
            })(MarketingMessagePrototypeType || (MarketingMessagePrototypeType = {}));
        })(MarketingMessageAction || (MarketingMessageAction = {}));
        /** Represents a MarketingMessageBroadcastAction. */
        class MarketingMessageBroadcastAction {
        }
        /** Represents a MerchantPaymentPartnerAction. */
        class MerchantPaymentPartnerAction {
        }
        (function (MerchantPaymentPartnerAction) {
            /** Status enum. */
            let Status;
            (function (Status) {
                Status[Status["ACTIVE"] = 0] = "ACTIVE";
                Status[Status["INACTIVE"] = 1] = "INACTIVE";
            })(Status || (Status = {}));
        })(MerchantPaymentPartnerAction || (MerchantPaymentPartnerAction = {}));
        /** Represents a MuteAction. */
        class MuteAction {
        }
        /** Represents a NoteEditAction. */
        class NoteEditAction {
        }
        (function (NoteEditAction) {
            /** NoteType enum. */
            let NoteType;
            (function (NoteType) {
                NoteType[NoteType["UNSTRUCTURED"] = 1] = "UNSTRUCTURED";
                NoteType[NoteType["STRUCTURED"] = 2] = "STRUCTURED";
            })(NoteType || (NoteType = {}));
        })(NoteEditAction || (NoteEditAction = {}));
        /** Represents a NotificationActivitySettingAction. */
        class NotificationActivitySettingAction {
        }
        (function (NotificationActivitySettingAction) {
            /** NotificationActivitySetting enum. */
            let NotificationActivitySetting;
            (function (NotificationActivitySetting) {
                NotificationActivitySetting[NotificationActivitySetting["DEFAULT_ALL_MESSAGES"] = 0] = "DEFAULT_ALL_MESSAGES";
                NotificationActivitySetting[NotificationActivitySetting["ALL_MESSAGES"] = 1] = "ALL_MESSAGES";
                NotificationActivitySetting[NotificationActivitySetting["HIGHLIGHTS"] = 2] = "HIGHLIGHTS";
                NotificationActivitySetting[NotificationActivitySetting["DEFAULT_HIGHLIGHTS"] = 3] = "DEFAULT_HIGHLIGHTS";
            })(NotificationActivitySetting || (NotificationActivitySetting = {}));
        })(NotificationActivitySettingAction || (NotificationActivitySettingAction = {}));
        /** Represents a NuxAction. */
        class NuxAction {
        }
        /** Represents a PaymentInfoAction. */
        class PaymentInfoAction {
        }
        /** Represents a PaymentTosAction. */
        class PaymentTosAction {
        }
        (function (PaymentTosAction) {
            /** PaymentNotice enum. */
            let PaymentNotice;
            (function (PaymentNotice) {
                PaymentNotice[PaymentNotice["BR_PAY_PRIVACY_POLICY"] = 0] = "BR_PAY_PRIVACY_POLICY";
            })(PaymentNotice || (PaymentNotice = {}));
        })(PaymentTosAction || (PaymentTosAction = {}));
        /** Represents a PinAction. */
        class PinAction {
        }
        /** Represents a PnForLidChatAction. */
        class PnForLidChatAction {
        }
        /** Represents a PrimaryFeature. */
        class PrimaryFeature {
        }
        /** Represents a PrimaryVersionAction. */
        class PrimaryVersionAction {
        }
        /** Represents a PrivacySettingDisableLinkPreviewsAction. */
        class PrivacySettingDisableLinkPreviewsAction {
        }
        /** Represents a PrivacySettingRelayAllCalls. */
        class PrivacySettingRelayAllCalls {
        }
        /** Represents a PushNameSetting. */
        class PushNameSetting {
        }
        /** Represents a QuickReplyAction. */
        class QuickReplyAction {
        }
        /** Represents a RecentEmojiWeightsAction. */
        class RecentEmojiWeightsAction {
        }
        /** Represents a RemoveRecentStickerAction. */
        class RemoveRecentStickerAction {
        }
        /** Represents a SecurityNotificationSetting. */
        class SecurityNotificationSetting {
        }
        /** Represents a StarAction. */
        class StarAction {
        }
        /** Represents a StatusPrivacyAction. */
        class StatusPrivacyAction {
        }
        (function (StatusPrivacyAction) {
            /** StatusDistributionMode enum. */
            let StatusDistributionMode;
            (function (StatusDistributionMode) {
                StatusDistributionMode[StatusDistributionMode["ALLOW_LIST"] = 0] = "ALLOW_LIST";
                StatusDistributionMode[StatusDistributionMode["DENY_LIST"] = 1] = "DENY_LIST";
                StatusDistributionMode[StatusDistributionMode["CONTACTS"] = 2] = "CONTACTS";
            })(StatusDistributionMode || (StatusDistributionMode = {}));
        })(StatusPrivacyAction || (StatusPrivacyAction = {}));
        /** Represents a StickerAction. */
        class StickerAction {
        }
        /** Represents a SubscriptionAction. */
        class SubscriptionAction {
        }
        /** Represents a SyncActionMessage. */
        class SyncActionMessage {
        }
        /** Represents a SyncActionMessageRange. */
        class SyncActionMessageRange {
        }
        /** Represents a TimeFormatAction. */
        class TimeFormatAction {
        }
        /** Represents an UnarchiveChatsSetting. */
        class UnarchiveChatsSetting {
        }
        /** Represents a UserStatusMuteAction. */
        class UserStatusMuteAction {
        }
        /** Represents a UsernameChatStartModeAction. */
        class UsernameChatStartModeAction {
        }
        (function (UsernameChatStartModeAction) {
            /** ChatStartMode enum. */
            let ChatStartMode;
            (function (ChatStartMode) {
                ChatStartMode[ChatStartMode["LID"] = 1] = "LID";
                ChatStartMode[ChatStartMode["PN"] = 2] = "PN";
            })(ChatStartMode || (ChatStartMode = {}));
        })(UsernameChatStartModeAction || (UsernameChatStartModeAction = {}));
        /** Represents a WaffleAccountLinkStateAction. */
        class WaffleAccountLinkStateAction {
        }
        (function (WaffleAccountLinkStateAction) {
            /** AccountLinkState enum. */
            let AccountLinkState;
            (function (AccountLinkState) {
                AccountLinkState[AccountLinkState["ACTIVE"] = 0] = "ACTIVE";
            })(AccountLinkState || (AccountLinkState = {}));
        })(WaffleAccountLinkStateAction || (WaffleAccountLinkStateAction = {}));
        /** Represents a WamoUserIdentifierAction. */
        class WamoUserIdentifierAction {
        }
    })(SyncActionValue || (SyncActionValue = {}));
    /** Represents a SyncdIndex. */
    class SyncdIndex {
    }
    /** Represents a SyncdMutation. */
    class SyncdMutation {
    }
    (function (SyncdMutation) {
        /** SyncdOperation enum. */
        let SyncdOperation;
        (function (SyncdOperation) {
            SyncdOperation[SyncdOperation["SET"] = 0] = "SET";
            SyncdOperation[SyncdOperation["REMOVE"] = 1] = "REMOVE";
        })(SyncdOperation || (SyncdOperation = {}));
    })(SyncdMutation || (SyncdMutation = {}));
    /** Represents a SyncdMutations. */
    class SyncdMutations {
    }
    /** Represents a SyncdPatch. */
    class SyncdPatch {
    }
    /** Represents a SyncdRecord. */
    class SyncdRecord {
    }
    /** Represents a SyncdSnapshot. */
    class SyncdSnapshot {
    }
    /** Represents a SyncdValue. */
    class SyncdValue {
    }
    /** Represents a SyncdVersion. */
    class SyncdVersion {
    }
    /** Represents a TapLinkAction. */
    class TapLinkAction {
    }
    /** Represents a TemplateButton. */
    class TemplateButton {
    }
    (function (TemplateButton) {
        /** Represents a CallButton. */
        class CallButton {
        }
        /** Represents a QuickReplyButton. */
        class QuickReplyButton {
        }
        /** Represents a URLButton. */
        class URLButton {
        }
    })(TemplateButton || (TemplateButton = {}));
    /** Represents an UrlTrackingMap. */
    class UrlTrackingMap {
    }
    (function (UrlTrackingMap) {
        /** Represents an UrlTrackingMapElement. */
        class UrlTrackingMapElement {
        }
    })(UrlTrackingMap || (UrlTrackingMap = {}));
    /** Represents a UserPassword. */
    class UserPassword {
    }
    (function (UserPassword) {
        /** Encoding enum. */
        let Encoding;
        (function (Encoding) {
            Encoding[Encoding["UTF8"] = 0] = "UTF8";
            Encoding[Encoding["UTF8_BROKEN"] = 1] = "UTF8_BROKEN";
        })(Encoding || (Encoding = {}));
        /** Transformer enum. */
        let Transformer;
        (function (Transformer) {
            Transformer[Transformer["NONE"] = 0] = "NONE";
            Transformer[Transformer["PBKDF2_HMAC_SHA512"] = 1] = "PBKDF2_HMAC_SHA512";
            Transformer[Transformer["PBKDF2_HMAC_SHA384"] = 2] = "PBKDF2_HMAC_SHA384";
        })(Transformer || (Transformer = {}));
        /** Represents a TransformerArg. */
        class TransformerArg {
        }
        (function (TransformerArg) {
            /** Represents a Value. */
            class Value {
            }
        })(TransformerArg || (TransformerArg = {}));
    })(UserPassword || (UserPassword = {}));
    /** Represents a UserReceipt. */
    class UserReceipt {
    }
    /** Represents a VerifiedNameCertificate. */
    class VerifiedNameCertificate {
    }
    (function (VerifiedNameCertificate) {
        /** Represents a Details. */
        class Details {
        }
    })(VerifiedNameCertificate || (VerifiedNameCertificate = {}));
    /** Represents a WallpaperSettings. */
    class WallpaperSettings {
    }
    /** Represents a WebFeatures. */
    class WebFeatures {
    }
    (function (WebFeatures) {
        /** Flag enum. */
        let Flag;
        (function (Flag) {
            Flag[Flag["NOT_STARTED"] = 0] = "NOT_STARTED";
            Flag[Flag["FORCE_UPGRADE"] = 1] = "FORCE_UPGRADE";
            Flag[Flag["DEVELOPMENT"] = 2] = "DEVELOPMENT";
            Flag[Flag["PRODUCTION"] = 3] = "PRODUCTION";
        })(Flag || (Flag = {}));
    })(WebFeatures || (WebFeatures = {}));
    /** Represents a WebMessageInfo. */
    class WebMessageInfo {
    }
    (function (WebMessageInfo) {
        /** BizPrivacyStatus enum. */
        let BizPrivacyStatus;
        (function (BizPrivacyStatus) {
            BizPrivacyStatus[BizPrivacyStatus["E2EE"] = 0] = "E2EE";
            BizPrivacyStatus[BizPrivacyStatus["FB"] = 2] = "FB";
            BizPrivacyStatus[BizPrivacyStatus["BSP"] = 1] = "BSP";
            BizPrivacyStatus[BizPrivacyStatus["BSP_AND_FB"] = 3] = "BSP_AND_FB";
        })(BizPrivacyStatus || (BizPrivacyStatus = {}));
        /** Status enum. */
        let Status;
        (function (Status) {
            Status[Status["ERROR"] = 0] = "ERROR";
            Status[Status["PENDING"] = 1] = "PENDING";
            Status[Status["SERVER_ACK"] = 2] = "SERVER_ACK";
            Status[Status["DELIVERY_ACK"] = 3] = "DELIVERY_ACK";
            Status[Status["READ"] = 4] = "READ";
            Status[Status["PLAYED"] = 5] = "PLAYED";
        })(Status || (Status = {}));
        /** StubType enum. */
        let StubType;
        (function (StubType) {
            StubType[StubType["UNKNOWN"] = 0] = "UNKNOWN";
            StubType[StubType["REVOKE"] = 1] = "REVOKE";
            StubType[StubType["CIPHERTEXT"] = 2] = "CIPHERTEXT";
            StubType[StubType["FUTUREPROOF"] = 3] = "FUTUREPROOF";
            StubType[StubType["NON_VERIFIED_TRANSITION"] = 4] = "NON_VERIFIED_TRANSITION";
            StubType[StubType["UNVERIFIED_TRANSITION"] = 5] = "UNVERIFIED_TRANSITION";
            StubType[StubType["VERIFIED_TRANSITION"] = 6] = "VERIFIED_TRANSITION";
            StubType[StubType["VERIFIED_LOW_UNKNOWN"] = 7] = "VERIFIED_LOW_UNKNOWN";
            StubType[StubType["VERIFIED_HIGH"] = 8] = "VERIFIED_HIGH";
            StubType[StubType["VERIFIED_INITIAL_UNKNOWN"] = 9] = "VERIFIED_INITIAL_UNKNOWN";
            StubType[StubType["VERIFIED_INITIAL_LOW"] = 10] = "VERIFIED_INITIAL_LOW";
            StubType[StubType["VERIFIED_INITIAL_HIGH"] = 11] = "VERIFIED_INITIAL_HIGH";
            StubType[StubType["VERIFIED_TRANSITION_ANY_TO_NONE"] = 12] = "VERIFIED_TRANSITION_ANY_TO_NONE";
            StubType[StubType["VERIFIED_TRANSITION_ANY_TO_HIGH"] = 13] = "VERIFIED_TRANSITION_ANY_TO_HIGH";
            StubType[StubType["VERIFIED_TRANSITION_HIGH_TO_LOW"] = 14] = "VERIFIED_TRANSITION_HIGH_TO_LOW";
            StubType[StubType["VERIFIED_TRANSITION_HIGH_TO_UNKNOWN"] = 15] = "VERIFIED_TRANSITION_HIGH_TO_UNKNOWN";
            StubType[StubType["VERIFIED_TRANSITION_UNKNOWN_TO_LOW"] = 16] = "VERIFIED_TRANSITION_UNKNOWN_TO_LOW";
            StubType[StubType["VERIFIED_TRANSITION_LOW_TO_UNKNOWN"] = 17] = "VERIFIED_TRANSITION_LOW_TO_UNKNOWN";
            StubType[StubType["VERIFIED_TRANSITION_NONE_TO_LOW"] = 18] = "VERIFIED_TRANSITION_NONE_TO_LOW";
            StubType[StubType["VERIFIED_TRANSITION_NONE_TO_UNKNOWN"] = 19] = "VERIFIED_TRANSITION_NONE_TO_UNKNOWN";
            StubType[StubType["GROUP_CREATE"] = 20] = "GROUP_CREATE";
            StubType[StubType["GROUP_CHANGE_SUBJECT"] = 21] = "GROUP_CHANGE_SUBJECT";
            StubType[StubType["GROUP_CHANGE_ICON"] = 22] = "GROUP_CHANGE_ICON";
            StubType[StubType["GROUP_CHANGE_INVITE_LINK"] = 23] = "GROUP_CHANGE_INVITE_LINK";
            StubType[StubType["GROUP_CHANGE_DESCRIPTION"] = 24] = "GROUP_CHANGE_DESCRIPTION";
            StubType[StubType["GROUP_CHANGE_RESTRICT"] = 25] = "GROUP_CHANGE_RESTRICT";
            StubType[StubType["GROUP_CHANGE_ANNOUNCE"] = 26] = "GROUP_CHANGE_ANNOUNCE";
            StubType[StubType["GROUP_PARTICIPANT_ADD"] = 27] = "GROUP_PARTICIPANT_ADD";
            StubType[StubType["GROUP_PARTICIPANT_REMOVE"] = 28] = "GROUP_PARTICIPANT_REMOVE";
            StubType[StubType["GROUP_PARTICIPANT_PROMOTE"] = 29] = "GROUP_PARTICIPANT_PROMOTE";
            StubType[StubType["GROUP_PARTICIPANT_DEMOTE"] = 30] = "GROUP_PARTICIPANT_DEMOTE";
            StubType[StubType["GROUP_PARTICIPANT_INVITE"] = 31] = "GROUP_PARTICIPANT_INVITE";
            StubType[StubType["GROUP_PARTICIPANT_LEAVE"] = 32] = "GROUP_PARTICIPANT_LEAVE";
            StubType[StubType["GROUP_PARTICIPANT_CHANGE_NUMBER"] = 33] = "GROUP_PARTICIPANT_CHANGE_NUMBER";
            StubType[StubType["BROADCAST_CREATE"] = 34] = "BROADCAST_CREATE";
            StubType[StubType["BROADCAST_ADD"] = 35] = "BROADCAST_ADD";
            StubType[StubType["BROADCAST_REMOVE"] = 36] = "BROADCAST_REMOVE";
            StubType[StubType["GENERIC_NOTIFICATION"] = 37] = "GENERIC_NOTIFICATION";
            StubType[StubType["E2E_IDENTITY_CHANGED"] = 38] = "E2E_IDENTITY_CHANGED";
            StubType[StubType["E2E_ENCRYPTED"] = 39] = "E2E_ENCRYPTED";
            StubType[StubType["CALL_MISSED_VOICE"] = 40] = "CALL_MISSED_VOICE";
            StubType[StubType["CALL_MISSED_VIDEO"] = 41] = "CALL_MISSED_VIDEO";
            StubType[StubType["INDIVIDUAL_CHANGE_NUMBER"] = 42] = "INDIVIDUAL_CHANGE_NUMBER";
            StubType[StubType["GROUP_DELETE"] = 43] = "GROUP_DELETE";
            StubType[StubType["GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE"] = 44] = "GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE";
            StubType[StubType["CALL_MISSED_GROUP_VOICE"] = 45] = "CALL_MISSED_GROUP_VOICE";
            StubType[StubType["CALL_MISSED_GROUP_VIDEO"] = 46] = "CALL_MISSED_GROUP_VIDEO";
            StubType[StubType["PAYMENT_CIPHERTEXT"] = 47] = "PAYMENT_CIPHERTEXT";
            StubType[StubType["PAYMENT_FUTUREPROOF"] = 48] = "PAYMENT_FUTUREPROOF";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED"] = 49] = "PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED"] = 50] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED"] = 51] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP"] = 52] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP"] = 53] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP";
            StubType[StubType["PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER"] = 54] = "PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER";
            StubType[StubType["PAYMENT_ACTION_SEND_PAYMENT_REMINDER"] = 55] = "PAYMENT_ACTION_SEND_PAYMENT_REMINDER";
            StubType[StubType["PAYMENT_ACTION_SEND_PAYMENT_INVITATION"] = 56] = "PAYMENT_ACTION_SEND_PAYMENT_INVITATION";
            StubType[StubType["PAYMENT_ACTION_REQUEST_DECLINED"] = 57] = "PAYMENT_ACTION_REQUEST_DECLINED";
            StubType[StubType["PAYMENT_ACTION_REQUEST_EXPIRED"] = 58] = "PAYMENT_ACTION_REQUEST_EXPIRED";
            StubType[StubType["PAYMENT_ACTION_REQUEST_CANCELLED"] = 59] = "PAYMENT_ACTION_REQUEST_CANCELLED";
            StubType[StubType["BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM"] = 60] = "BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM";
            StubType[StubType["BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP"] = 61] = "BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP";
            StubType[StubType["BIZ_INTRO_TOP"] = 62] = "BIZ_INTRO_TOP";
            StubType[StubType["BIZ_INTRO_BOTTOM"] = 63] = "BIZ_INTRO_BOTTOM";
            StubType[StubType["BIZ_NAME_CHANGE"] = 64] = "BIZ_NAME_CHANGE";
            StubType[StubType["BIZ_MOVE_TO_CONSUMER_APP"] = 65] = "BIZ_MOVE_TO_CONSUMER_APP";
            StubType[StubType["BIZ_TWO_TIER_MIGRATION_TOP"] = 66] = "BIZ_TWO_TIER_MIGRATION_TOP";
            StubType[StubType["BIZ_TWO_TIER_MIGRATION_BOTTOM"] = 67] = "BIZ_TWO_TIER_MIGRATION_BOTTOM";
            StubType[StubType["OVERSIZED"] = 68] = "OVERSIZED";
            StubType[StubType["GROUP_CHANGE_NO_FREQUENTLY_FORWARDED"] = 69] = "GROUP_CHANGE_NO_FREQUENTLY_FORWARDED";
            StubType[StubType["GROUP_V4_ADD_INVITE_SENT"] = 70] = "GROUP_V4_ADD_INVITE_SENT";
            StubType[StubType["GROUP_PARTICIPANT_ADD_REQUEST_JOIN"] = 71] = "GROUP_PARTICIPANT_ADD_REQUEST_JOIN";
            StubType[StubType["CHANGE_EPHEMERAL_SETTING"] = 72] = "CHANGE_EPHEMERAL_SETTING";
            StubType[StubType["E2E_DEVICE_CHANGED"] = 73] = "E2E_DEVICE_CHANGED";
            StubType[StubType["VIEWED_ONCE"] = 74] = "VIEWED_ONCE";
            StubType[StubType["E2E_ENCRYPTED_NOW"] = 75] = "E2E_ENCRYPTED_NOW";
            StubType[StubType["BLUE_MSG_BSP_FB_TO_BSP_PREMISE"] = 76] = "BLUE_MSG_BSP_FB_TO_BSP_PREMISE";
            StubType[StubType["BLUE_MSG_BSP_FB_TO_SELF_FB"] = 77] = "BLUE_MSG_BSP_FB_TO_SELF_FB";
            StubType[StubType["BLUE_MSG_BSP_FB_TO_SELF_PREMISE"] = 78] = "BLUE_MSG_BSP_FB_TO_SELF_PREMISE";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED"] = 79] = "BLUE_MSG_BSP_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 80] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED"] = 81] = "BLUE_MSG_BSP_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 82] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE"] = 83] = "BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_UNVERIFIED"] = 84] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 85] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_VERIFIED"] = 86] = "BLUE_MSG_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 87] = "BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED"] = 88] = "BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED"] = 89] = "BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED"] = 90] = "BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED"] = 91] = "BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_TO_BSP_PREMISE"] = 92] = "BLUE_MSG_SELF_FB_TO_BSP_PREMISE";
            StubType[StubType["BLUE_MSG_SELF_FB_TO_SELF_PREMISE"] = 93] = "BLUE_MSG_SELF_FB_TO_SELF_PREMISE";
            StubType[StubType["BLUE_MSG_SELF_FB_UNVERIFIED"] = 94] = "BLUE_MSG_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 95] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_VERIFIED"] = 96] = "BLUE_MSG_SELF_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 97] = "BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE"] = 98] = "BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE";
            StubType[StubType["BLUE_MSG_SELF_PREMISE_UNVERIFIED"] = 99] = "BLUE_MSG_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_PREMISE_VERIFIED"] = 100] = "BLUE_MSG_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_TO_BSP_FB"] = 101] = "BLUE_MSG_TO_BSP_FB";
            StubType[StubType["BLUE_MSG_TO_CONSUMER"] = 102] = "BLUE_MSG_TO_CONSUMER";
            StubType[StubType["BLUE_MSG_TO_SELF_FB"] = 103] = "BLUE_MSG_TO_SELF_FB";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED"] = 104] = "BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 105] = "BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 106] = "BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_VERIFIED"] = 107] = "BLUE_MSG_UNVERIFIED_TO_VERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED"] = 108] = "BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 109] = "BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 110] = "BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_UNVERIFIED"] = 111] = "BLUE_MSG_VERIFIED_TO_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 112] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 113] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 114] = "BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 115] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 116] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 117] = "BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["E2E_IDENTITY_UNAVAILABLE"] = 118] = "E2E_IDENTITY_UNAVAILABLE";
            StubType[StubType["GROUP_CREATING"] = 119] = "GROUP_CREATING";
            StubType[StubType["GROUP_CREATE_FAILED"] = 120] = "GROUP_CREATE_FAILED";
            StubType[StubType["GROUP_BOUNCED"] = 121] = "GROUP_BOUNCED";
            StubType[StubType["BLOCK_CONTACT"] = 122] = "BLOCK_CONTACT";
            StubType[StubType["EPHEMERAL_SETTING_NOT_APPLIED"] = 123] = "EPHEMERAL_SETTING_NOT_APPLIED";
            StubType[StubType["SYNC_FAILED"] = 124] = "SYNC_FAILED";
            StubType[StubType["SYNCING"] = 125] = "SYNCING";
            StubType[StubType["BIZ_PRIVACY_MODE_INIT_FB"] = 126] = "BIZ_PRIVACY_MODE_INIT_FB";
            StubType[StubType["BIZ_PRIVACY_MODE_INIT_BSP"] = 127] = "BIZ_PRIVACY_MODE_INIT_BSP";
            StubType[StubType["BIZ_PRIVACY_MODE_TO_FB"] = 128] = "BIZ_PRIVACY_MODE_TO_FB";
            StubType[StubType["BIZ_PRIVACY_MODE_TO_BSP"] = 129] = "BIZ_PRIVACY_MODE_TO_BSP";
            StubType[StubType["DISAPPEARING_MODE"] = 130] = "DISAPPEARING_MODE";
            StubType[StubType["E2E_DEVICE_FETCH_FAILED"] = 131] = "E2E_DEVICE_FETCH_FAILED";
            StubType[StubType["ADMIN_REVOKE"] = 132] = "ADMIN_REVOKE";
            StubType[StubType["GROUP_INVITE_LINK_GROWTH_LOCKED"] = 133] = "GROUP_INVITE_LINK_GROWTH_LOCKED";
            StubType[StubType["COMMUNITY_LINK_PARENT_GROUP"] = 134] = "COMMUNITY_LINK_PARENT_GROUP";
            StubType[StubType["COMMUNITY_LINK_SIBLING_GROUP"] = 135] = "COMMUNITY_LINK_SIBLING_GROUP";
            StubType[StubType["COMMUNITY_LINK_SUB_GROUP"] = 136] = "COMMUNITY_LINK_SUB_GROUP";
            StubType[StubType["COMMUNITY_UNLINK_PARENT_GROUP"] = 137] = "COMMUNITY_UNLINK_PARENT_GROUP";
            StubType[StubType["COMMUNITY_UNLINK_SIBLING_GROUP"] = 138] = "COMMUNITY_UNLINK_SIBLING_GROUP";
            StubType[StubType["COMMUNITY_UNLINK_SUB_GROUP"] = 139] = "COMMUNITY_UNLINK_SUB_GROUP";
            StubType[StubType["GROUP_PARTICIPANT_ACCEPT"] = 140] = "GROUP_PARTICIPANT_ACCEPT";
            StubType[StubType["GROUP_PARTICIPANT_LINKED_GROUP_JOIN"] = 141] = "GROUP_PARTICIPANT_LINKED_GROUP_JOIN";
            StubType[StubType["COMMUNITY_CREATE"] = 142] = "COMMUNITY_CREATE";
            StubType[StubType["EPHEMERAL_KEEP_IN_CHAT"] = 143] = "EPHEMERAL_KEEP_IN_CHAT";
            StubType[StubType["GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST"] = 144] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST";
            StubType[StubType["GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE"] = 145] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE";
            StubType[StubType["INTEGRITY_UNLINK_PARENT_GROUP"] = 146] = "INTEGRITY_UNLINK_PARENT_GROUP";
            StubType[StubType["COMMUNITY_PARTICIPANT_PROMOTE"] = 147] = "COMMUNITY_PARTICIPANT_PROMOTE";
            StubType[StubType["COMMUNITY_PARTICIPANT_DEMOTE"] = 148] = "COMMUNITY_PARTICIPANT_DEMOTE";
            StubType[StubType["COMMUNITY_PARENT_GROUP_DELETED"] = 149] = "COMMUNITY_PARENT_GROUP_DELETED";
            StubType[StubType["COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL"] = 150] = "COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL";
            StubType[StubType["GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP"] = 151] = "GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP";
            StubType[StubType["MASKED_THREAD_CREATED"] = 152] = "MASKED_THREAD_CREATED";
            StubType[StubType["MASKED_THREAD_UNMASKED"] = 153] = "MASKED_THREAD_UNMASKED";
            StubType[StubType["BIZ_CHAT_ASSIGNMENT"] = 154] = "BIZ_CHAT_ASSIGNMENT";
            StubType[StubType["CHAT_PSA"] = 155] = "CHAT_PSA";
            StubType[StubType["CHAT_POLL_CREATION_MESSAGE"] = 156] = "CHAT_POLL_CREATION_MESSAGE";
            StubType[StubType["CAG_MASKED_THREAD_CREATED"] = 157] = "CAG_MASKED_THREAD_CREATED";
            StubType[StubType["COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED"] = 158] = "COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED";
            StubType[StubType["CAG_INVITE_AUTO_ADD"] = 159] = "CAG_INVITE_AUTO_ADD";
            StubType[StubType["BIZ_CHAT_ASSIGNMENT_UNASSIGN"] = 160] = "BIZ_CHAT_ASSIGNMENT_UNASSIGN";
            StubType[StubType["CAG_INVITE_AUTO_JOINED"] = 161] = "CAG_INVITE_AUTO_JOINED";
            StubType[StubType["SCHEDULED_CALL_START_MESSAGE"] = 162] = "SCHEDULED_CALL_START_MESSAGE";
            StubType[StubType["COMMUNITY_INVITE_RICH"] = 163] = "COMMUNITY_INVITE_RICH";
            StubType[StubType["COMMUNITY_INVITE_AUTO_ADD_RICH"] = 164] = "COMMUNITY_INVITE_AUTO_ADD_RICH";
            StubType[StubType["SUB_GROUP_INVITE_RICH"] = 165] = "SUB_GROUP_INVITE_RICH";
            StubType[StubType["SUB_GROUP_PARTICIPANT_ADD_RICH"] = 166] = "SUB_GROUP_PARTICIPANT_ADD_RICH";
            StubType[StubType["COMMUNITY_LINK_PARENT_GROUP_RICH"] = 167] = "COMMUNITY_LINK_PARENT_GROUP_RICH";
            StubType[StubType["COMMUNITY_PARTICIPANT_ADD_RICH"] = 168] = "COMMUNITY_PARTICIPANT_ADD_RICH";
            StubType[StubType["SILENCED_UNKNOWN_CALLER_AUDIO"] = 169] = "SILENCED_UNKNOWN_CALLER_AUDIO";
            StubType[StubType["SILENCED_UNKNOWN_CALLER_VIDEO"] = 170] = "SILENCED_UNKNOWN_CALLER_VIDEO";
            StubType[StubType["GROUP_MEMBER_ADD_MODE"] = 171] = "GROUP_MEMBER_ADD_MODE";
            StubType[StubType["GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD"] = 172] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD";
            StubType[StubType["COMMUNITY_CHANGE_DESCRIPTION"] = 173] = "COMMUNITY_CHANGE_DESCRIPTION";
            StubType[StubType["SENDER_INVITE"] = 174] = "SENDER_INVITE";
            StubType[StubType["RECEIVER_INVITE"] = 175] = "RECEIVER_INVITE";
            StubType[StubType["COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS"] = 176] = "COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS";
            StubType[StubType["PINNED_MESSAGE_IN_CHAT"] = 177] = "PINNED_MESSAGE_IN_CHAT";
            StubType[StubType["PAYMENT_INVITE_SETUP_INVITER"] = 178] = "PAYMENT_INVITE_SETUP_INVITER";
            StubType[StubType["PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY"] = 179] = "PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY";
            StubType[StubType["PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE"] = 180] = "PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE";
            StubType[StubType["LINKED_GROUP_CALL_START"] = 181] = "LINKED_GROUP_CALL_START";
            StubType[StubType["REPORT_TO_ADMIN_ENABLED_STATUS"] = 182] = "REPORT_TO_ADMIN_ENABLED_STATUS";
            StubType[StubType["EMPTY_SUBGROUP_CREATE"] = 183] = "EMPTY_SUBGROUP_CREATE";
            StubType[StubType["SCHEDULED_CALL_CANCEL"] = 184] = "SCHEDULED_CALL_CANCEL";
            StubType[StubType["SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH"] = 185] = "SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH";
            StubType[StubType["GROUP_CHANGE_RECENT_HISTORY_SHARING"] = 186] = "GROUP_CHANGE_RECENT_HISTORY_SHARING";
            StubType[StubType["PAID_MESSAGE_SERVER_CAMPAIGN_ID"] = 187] = "PAID_MESSAGE_SERVER_CAMPAIGN_ID";
            StubType[StubType["GENERAL_CHAT_CREATE"] = 188] = "GENERAL_CHAT_CREATE";
            StubType[StubType["GENERAL_CHAT_ADD"] = 189] = "GENERAL_CHAT_ADD";
            StubType[StubType["GENERAL_CHAT_AUTO_ADD_DISABLED"] = 190] = "GENERAL_CHAT_AUTO_ADD_DISABLED";
            StubType[StubType["SUGGESTED_SUBGROUP_ANNOUNCE"] = 191] = "SUGGESTED_SUBGROUP_ANNOUNCE";
            StubType[StubType["BIZ_BOT_1P_MESSAGING_ENABLED"] = 192] = "BIZ_BOT_1P_MESSAGING_ENABLED";
            StubType[StubType["CHANGE_USERNAME"] = 193] = "CHANGE_USERNAME";
            StubType[StubType["BIZ_COEX_PRIVACY_INIT_SELF"] = 194] = "BIZ_COEX_PRIVACY_INIT_SELF";
            StubType[StubType["BIZ_COEX_PRIVACY_TRANSITION_SELF"] = 195] = "BIZ_COEX_PRIVACY_TRANSITION_SELF";
            StubType[StubType["SUPPORT_AI_EDUCATION"] = 196] = "SUPPORT_AI_EDUCATION";
            StubType[StubType["BIZ_BOT_3P_MESSAGING_ENABLED"] = 197] = "BIZ_BOT_3P_MESSAGING_ENABLED";
            StubType[StubType["REMINDER_SETUP_MESSAGE"] = 198] = "REMINDER_SETUP_MESSAGE";
            StubType[StubType["REMINDER_SENT_MESSAGE"] = 199] = "REMINDER_SENT_MESSAGE";
            StubType[StubType["REMINDER_CANCEL_MESSAGE"] = 200] = "REMINDER_CANCEL_MESSAGE";
            StubType[StubType["BIZ_COEX_PRIVACY_INIT"] = 201] = "BIZ_COEX_PRIVACY_INIT";
            StubType[StubType["BIZ_COEX_PRIVACY_TRANSITION"] = 202] = "BIZ_COEX_PRIVACY_TRANSITION";
            StubType[StubType["GROUP_DEACTIVATED"] = 203] = "GROUP_DEACTIVATED";
            StubType[StubType["COMMUNITY_DEACTIVATE_SIBLING_GROUP"] = 204] = "COMMUNITY_DEACTIVATE_SIBLING_GROUP";
            StubType[StubType["EVENT_UPDATED"] = 205] = "EVENT_UPDATED";
            StubType[StubType["EVENT_CANCELED"] = 206] = "EVENT_CANCELED";
            StubType[StubType["COMMUNITY_OWNER_UPDATED"] = 207] = "COMMUNITY_OWNER_UPDATED";
            StubType[StubType["COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN"] = 208] = "COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN";
            StubType[StubType["CAPI_GROUP_NE2EE_SYSTEM_MESSAGE"] = 209] = "CAPI_GROUP_NE2EE_SYSTEM_MESSAGE";
            StubType[StubType["STATUS_MENTION"] = 210] = "STATUS_MENTION";
            StubType[StubType["USER_CONTROLS_SYSTEM_MESSAGE"] = 211] = "USER_CONTROLS_SYSTEM_MESSAGE";
            StubType[StubType["SUPPORT_SYSTEM_MESSAGE"] = 212] = "SUPPORT_SYSTEM_MESSAGE";
            StubType[StubType["CHANGE_LID"] = 213] = "CHANGE_LID";
            StubType[StubType["BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE"] = 214] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE";
            StubType[StubType["BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE"] = 215] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE";
            StubType[StubType["CHANGE_LIMIT_SHARING"] = 216] = "CHANGE_LIMIT_SHARING";
            StubType[StubType["GROUP_MEMBER_LINK_MODE"] = 217] = "GROUP_MEMBER_LINK_MODE";
            StubType[StubType["BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE"] = 218] = "BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE";
        })(StubType || (StubType = {}));
    })(WebMessageInfo || (WebMessageInfo = {}));
    /** Represents a WebNotificationsInfo. */
    class WebNotificationsInfo {
    }
})(proto || (exports.proto = proto = {}));
