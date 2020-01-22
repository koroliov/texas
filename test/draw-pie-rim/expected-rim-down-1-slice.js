'use strict';

module.exports = 'data:image/png;base64,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';
