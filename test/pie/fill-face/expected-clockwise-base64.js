'use strict';

module.exports = 'data:image/png;base64,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';