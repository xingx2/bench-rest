var qospolicy_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/qos/policies';
var qospolicy_post_json = {
    "policy": {
        "shared": false,
        "tenant_id": "aa902936679e4ea29bfe1158e3450a13",
        "id": "d6220bbb-35f3-48ab-8eae-"+"#{INDEX}",
        "name": "jaxb-test"
    }
}


var qospolicy_put_json = {
        "policy": {
            "bandwidth_limit_rules": [
                {
                    "tenant_id": "aa902936679e4ea29bfe1158e3450a14",
                    "id": "d6220bbb-35f3-48ab-8eae-69c60aef3547",
                    "max_burst_kbps": 100,
                    "max_kbps": 25
                }
            ],
            "name": "jaxb-test",
            "tenant_id": "aa902936679e4ea29bfe1158e3450a13",
            "dscp_marking_rules": [
                {
                    "tenant_id": "aa902936679e4ea29bfe1158e3450a14",
                    "dscp_mark": 8,
                    "id": "d6220bbb-35f3-48ab-8eae-69c60aef3547"
                }
            ],
            "shared": false,
            "id": "d6220bbb-35f3-48ab-8eae-"+"#{INDEX}"
        }
    
}

exports.qospolicy_url = qospolicy_url
exports.qospolicy_post_json = qospolicy_post_json
exports.qospolicy_put_json = qospolicy_put_json