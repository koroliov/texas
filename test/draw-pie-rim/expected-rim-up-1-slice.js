'use strict';

module.exports = 'data:image/png;base64,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EA+Jx+My/LwlQEP4bHgP74iHJBIJBUNBt8cAPCkQDLg9Av4NAfGQeDyucCTs9hiAJ4XDfDa8hoB4SCKRUGFhodtjAJ7EZ8N7CIiHpNNpRSIRt8cAPIkViPcQEA/JZDIqCBW4PQbgSaFQyO0R8G8IiIdkMhkFg+xEBxpCQLyHgHgIKxDgi/HZ8B4C4iEEBPhi4QL2gXiNL5vNco1LAMARYwUCAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBwhIAAABwhIAAARwgIAMARAgIAcISAAAAcISAAAEcICADAEQICAHCEgAAAHCEgAABHCAgAwBECAgBw5P8DUKBcZV9n72EAAAAASUVORK5CYII=';
