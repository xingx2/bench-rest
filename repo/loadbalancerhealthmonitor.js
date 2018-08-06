var healthmonitor_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/lbaas/healthmonitors';
var healthmonitor_post_json = {
    "healthmonitor": {
        "admin_state_up": true,
        "delay": 1,
        "expected_codes": "200,201,202",
        "http_method": "GET",
        "id": "0a9ac99d-0a09-4b18-8499-"+"#{INDEX}",
        "max_retries": 5,
        "pools": [
            {
                "id": "74aa2010-a59f-4d35-a436-60a6da882819"
            }
        ],
        "tenant_id": "6f3584d5754048a18e30685362b88411",
        "timeout": 1,
        "type": "HTTP",
        "url_path": "/index.html"
    }
}

var healthmonitor_put_json = {
        "healthmonitor": {
            "admin_state_up": false,
            "delay": 2,
            "expected_codes": "200",
            "http_method": "POST",
            "id": "0a9ac99d-0a09-4b18-8499-"+"#{INDEX}",
            "max_retries": 2,
            "pools": [
                {
                    "id": "74aa2010-a59f-4d35-a436-60a6da882819"
                }
            ],
            "tenant_id": "6f3584d5754048a18e30685362b88411",
            "timeout": 2,
            "type": "HTTP",
            "url_path": "/page.html"
        }
    
}


exports.healthmonitor_url = healthmonitor_url
exports.healthmonitor_post_json = healthmonitor_post_json
exports.healthmonitor_put_json = healthmonitor_put_json