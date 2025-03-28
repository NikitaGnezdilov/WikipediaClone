#!/bin/bash

action=$1
version=$2

if [[ "$action" == "apply" || "$action" == "rollback" ]]; then
  SCRIPT="patches/$version/$action.sh"
  if [[ -f "$SCRIPT" ]]; then
    bash "$SCRIPT"
  else
    echo "❌ Скрипт не найден: $SCRIPT"
  fi
elif [[ "$action" == "snapshot" ]]; then
  SNAPSHOT_NAME=$2
  mkdir -p backups
  zip -r "backups/$SNAPSHOT_NAME.zip" src public package.json package-lock.json > /dev/null
  echo "✅ Снапшот сохранён в backups/$SNAPSHOT_NAME.zip"
elif [[ "$action" == "restore" ]]; then
  SNAPSHOT_NAME=$2
  if [[ -f "backups/$SNAPSHOT_NAME.zip" ]]; then
    unzip -o "backups/$SNAPSHOT_NAME.zip" -d ./ > /dev/null
    echo "✅ Проект восстановлен из backups/$SNAPSHOT_NAME.zip"
  else
    echo "❌ Снапшот не найден: backups/$SNAPSHOT_NAME.zip"
  fi
else
  echo "❗ Использование:"
  echo "  bash patch.sh apply v1"
  echo "  bash patch.sh rollback v1"
  echo "  bash patch.sh snapshot my-backup"
  echo "  bash patch.sh restore my-backup"
fi
