<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;


class PermissionSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {


        $permissions = [
            'create_user',
            'view_user',
            'update_user',
            'delete_user',
            'user_configuration_create',
            'user_configuration_view',
            'user_configuration_update',
            'user_configuration_delete',
            'create_job',
            'view_job',
            'update_job',
            'delete_job',
            'job_configuration_create',
            'job_configuration_view',
            'job_configuration_update',
            'job_configuration_delete',
            'view_news_notice',
            'create_news_notice',
            'update_news_notice',
            'delete_news_notice',
            'news_notice_configuration_create',
            'news_notice_configuration_view',
            'news_notice_configuration_update',
            'news_notice_configuration_delete',
            'view_blog_article',
            'create_blog_article',
            'update_blog_article',
            'delete_blog_article',
            'blog_article_configuration_create',
            'blog_article_configuration_view',
            'blog_article_configuration_update',
            'blog_article_configuration_delete',
            'post_create',
            'post_view',
            'post_update',
            'post_delete',
            'post_configuration_create',
            'post_configuration_view',
            'post_configuration_update',
            'post_configuration_delete',
            'event_create',
            'event_view',
            'event_update',
            'event_delete',
            'event_configuration_create',
            'event_configuration_view',
            'event_configuration_update',
            'event_configuration_delete',
            'advertisement_create',
            'advertisement_view',
            'advertisement_update',
            'advertisement_delete',
            'advertisement_configuration_create',
            'advertisement_configuration_view',
            'advertisement_configuration_update',
            'advertisement_configuration_delete',
            'banner_create',
            'banner_view',
            'banner_update',
            'banner_delete',
            'vlog_create',
            'vlog_view',
            'vlog_update',
            'vlog_delete',
            'vlog_configuration_create',
            'vlog_configuration_update',
            'vlog_configuration_view',
            'vlog_configuration_delete',


        ];

        foreach ($permissions as $permission) {
            Permission::create(["name" => $permission]);
        }
    }
}
