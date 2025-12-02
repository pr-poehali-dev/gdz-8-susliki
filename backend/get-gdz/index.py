'''
Business: Get GDZ tasks from database by subject and class number
Args: event - dict with httpMethod, queryStringParameters (subject, class_number)
      context - object with attributes: request_id, function_name
Returns: HTTP response with list of tasks in JSON format
'''

import json
import os
from typing import Dict, Any, List
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters') or {}
    subject = params.get('subject')
    class_number = params.get('class')
    
    if not subject or not class_number:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Missing required parameters: subject and class'
            }),
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database configuration missing'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    query = '''
        SELECT id, task_number, textbook, title, solution 
        FROM gdz_tasks 
        WHERE subject = %s AND class_number = %s 
        ORDER BY task_number
    '''
    
    cursor.execute(query, (subject, int(class_number)))
    tasks = cursor.fetchall()
    
    cursor.close()
    conn.close()
    
    tasks_list = [dict(task) for task in tasks]
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'tasks': tasks_list,
            'total': len(tasks_list),
            'subject': subject,
            'class': class_number
        }, ensure_ascii=False),
        'isBase64Encoded': False
    }
